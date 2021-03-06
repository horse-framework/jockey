using System;
using System.Threading.Tasks;
using Horse.Jockey.Core;
using Horse.Jockey.Models.WebSockets;
using Horse.Messaging.Server;
using Horse.Messaging.Server.Queues;
using Horse.Protocols.WebSocket;
using Horse.WebSocket.Models;

namespace Horse.Jockey.Handlers.WebSockets
{
	internal class QueueDetailHandler : IWebSocketMessageHandler<QueueDetailRequest>
	{
		private readonly IWebSocketServerBus _bus;
		private readonly SubscriptionService _subscriptionService;
		private readonly HorseRider _rider;

		public QueueDetailHandler(IWebSocketServerBus bus, SubscriptionService subscriptionService, HorseRider rider)
		{
			_bus = bus;
			_subscriptionService = subscriptionService;
			_rider = rider;
		}

		public async Task Handle(QueueDetailRequest model, WebSocketMessage message, IHorseWebSocket client)
		{
			if (string.IsNullOrEmpty(model.Name))
			{
				_subscriptionService.UnsubscribeQueueDetail((WsServerSocket)client);
				await _bus.SendAsync(client, new ConsoleResponse { RequestId = model.RequestId, Ok = true });
				return;
			}

			HorseQueue queue = _rider.Queue.Find(model.Name);
			if (queue == null)
			{
				await _bus.SendAsync(client, new ConsoleResponse { RequestId = model.RequestId, Ok = false });
				return;
			}

			_subscriptionService.SubscribeQueueDetail((WsServerSocket)client, queue);

			await _bus.SendAsync(client, new ConsoleResponse { RequestId = model.RequestId, Ok = true });
		}

		public Task OnError(Exception exception, QueueDetailRequest model, WebSocketMessage message, IHorseWebSocket client)
		{
			return _bus.SendAsync(client, new QueueDetailResponse { RequestId = model.RequestId, Ok = false });
		}
	}
}
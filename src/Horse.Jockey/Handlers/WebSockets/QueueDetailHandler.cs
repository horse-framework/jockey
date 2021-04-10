using System;
using System.Threading.Tasks;
using Horse.Jockey.Core;
using Horse.Jockey.Models.WebSockets;
using Horse.Mq;
using Horse.Mq.Queues;
using Horse.Protocols.WebSocket;
using Horse.WebSocket.Models;

namespace Horse.Jockey.Handlers.WebSockets
{
    public class QueueDetailHandler : IWebSocketMessageHandler<QueueDetailRequest>
    {
        private readonly IWebSocketServerBus _bus;
        private readonly SubscriptionService _subscriptionService;
        private readonly HorseMq _mq;

        public QueueDetailHandler(IWebSocketServerBus bus, SubscriptionService subscriptionService, HorseMq mq)
        {
            _bus = bus;
            _subscriptionService = subscriptionService;
            _mq = mq;
        }

        public async Task Handle(QueueDetailRequest model, WebSocketMessage message, IHorseWebSocket client)
        {
            if (string.IsNullOrEmpty(model.Name))
            {
                _subscriptionService.UnsubscribeQueueDetail((WsServerSocket) client);
                await _bus.SendAsync(client, new ConsoleResponse {RequestId = model.RequestId, Ok = true});
                return;
            }

            HorseQueue queue = _mq.FindQueue(model.Name);
            if (queue == null)
            {
                await _bus.SendAsync(client, new ConsoleResponse {RequestId = model.RequestId, Ok = false});
                return;
            }

            _subscriptionService.SubscribeQueueDetail((WsServerSocket) client, queue);

            await _bus.SendAsync(client, new ConsoleResponse {RequestId = model.RequestId, Ok = true});
        }

        public Task OnError(Exception exception, QueueDetailRequest model, WebSocketMessage message, IHorseWebSocket client)
        {
            return _bus.SendAsync(client, new QueueDetailResponse {RequestId = model.RequestId, Ok = false});
        }
    }
}
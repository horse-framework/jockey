using System;
using System.Threading.Tasks;
using Horse.Jockey.Core;
using Horse.Jockey.Helpers;
using Horse.Jockey.Models.Subscriptions;
using Horse.Jockey.Models.WebSockets;
using Horse.Protocols.WebSocket;
using Horse.WebSocket.Models;

namespace Horse.Jockey.Handlers.WebSockets
{
    public class ConsoleHandler : IWebSocketMessageHandler<ConsoleRequest>
    {
        private readonly IWebSocketServerBus _bus;
        private readonly SubscriptionService _subscriptionService;

        public ConsoleHandler(IWebSocketServerBus bus, SubscriptionService subscriptionService)
        {
            _bus = bus;
            _subscriptionService = subscriptionService;
        }

        public async Task Handle(ConsoleRequest model, WebSocketMessage message, IHorseWebSocket client)
        {
            if (string.IsNullOrEmpty(model.Target))
                throw new ArgumentNullException();

            SubscriptionSource source = model.Source.EnumValueFromDescription<SubscriptionSource>();
            SubscriptionTargetType targetType = model.TargetType.EnumValueFromDescription<SubscriptionTargetType>();

            _subscriptionService.SubscribeConsole((WsServerSocket) client, source, targetType, model.Target);

            await _bus.SendAsync(client, new ConsoleResponse {RequestId = model.RequestId, Ok = true});
        }

        public Task OnError(Exception exception, ConsoleRequest model, WebSocketMessage message, IHorseWebSocket client)
        {
            return _bus.SendAsync(client, new ConsoleResponse {RequestId = model.RequestId, Ok = false});
        }
    }
}
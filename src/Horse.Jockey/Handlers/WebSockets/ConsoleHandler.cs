using System;
using System.Threading.Tasks;
using Horse.Jockey.Core;
using Horse.Jockey.Helpers;
using Horse.Jockey.Models.Subscriptions;
using Horse.Jockey.Models.WebSockets;
using Horse.WebSocket.Protocol;
using Horse.WebSocket.Server;

namespace Horse.Jockey.Handlers.WebSockets
{
    internal class ConsoleHandler : IWebSocketMessageHandler<ConsoleRequest>
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
            {
                _subscriptionService.UnsubscribeConsole((WsServerSocket) client);
                await _bus.SendTextAsync(client, new ConsoleResponse {RequestId = model.RequestId, Ok = true});
                return;
            }

            SubscriptionSource source = model.Source.EnumValueFromDescription<SubscriptionSource>();
            SubscriptionTargetType targetType = model.TargetType.EnumValueFromDescription<SubscriptionTargetType>();

            _subscriptionService.SubscribeConsole((WsServerSocket) client, source, targetType, model.Target);

            await _bus.SendTextAsync(client, new ConsoleResponse {RequestId = model.RequestId, Ok = true});
        }

        public Task OnError(Exception exception, ConsoleRequest model, WebSocketMessage message, IHorseWebSocket client)
        {
            return _bus.SendTextAsync(client, new ConsoleResponse {RequestId = model.RequestId, Ok = false}).AsTask();
        }
    }
}
using System;
using System.Threading.Tasks;
using Horse.Jockey.Core;
using Horse.Jockey.Models.WebSockets;
using Horse.WebSocket.Protocol;

namespace Horse.Jockey.Handlers.WebSockets
{
    internal class DashboardHandler : IWebSocketMessageHandler<DashboardRequest>
    {
        private readonly SubscriptionService _subscriptionService;

        public DashboardHandler(SubscriptionService subscriptionService)
        {
            _subscriptionService = subscriptionService;
        }

        public Task Handle(DashboardRequest model, WebSocketMessage message, IHorseWebSocket client)
        {
            if (model.Join)
                _subscriptionService.SubscribeDashboard((WsServerSocket) client);
            else
                _subscriptionService.UnsubscribeDashboard((WsServerSocket) client);

            return Task.CompletedTask;
        }

        public Task OnError(Exception exception, DashboardRequest model, WebSocketMessage message, IHorseWebSocket client)
        {
            return Task.CompletedTask;
        }
    }
}
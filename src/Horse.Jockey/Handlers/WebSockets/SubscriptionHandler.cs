using System;
using System.Threading.Tasks;
using Horse.Jockey.Core;
using Horse.Jockey.Models.WebSockets;
using Horse.Messaging.Server;
using Horse.WebSocket.Protocol;

namespace Horse.Jockey.Handlers.WebSockets
{
    internal class SubscriptionHandler : IWebSocketMessageHandler<SubscriptionRequest>
    {
        private readonly SubscriptionService _subscriptionService;
        private readonly HorseRider _rider;

        public SubscriptionHandler(SubscriptionService subscriptionService, HorseRider rider)
        {
            _subscriptionService = subscriptionService;
            _rider = rider;
        }

        public Task Handle(SubscriptionRequest model, WebSocketMessage message, IHorseWebSocket client)
        {
            WsServerSocket socket = (WsServerSocket) client;
            string[] split = model.Channel.Split(':');
            switch (split[0])
            {
                case "dashboard":
                    if (model.Join)
                        _subscriptionService.SubscribeDashboard(socket);
                    else
                        _subscriptionService.UnsubscribeDashboard(socket);
                    break;

                case "queue":
                    if (model.Join)
                        _subscriptionService.SubscribeQueueDetail(socket, _rider.Queue.Find(split[1]), model.Resolution);
                    else
                        _subscriptionService.UnsubscribeQueueDetail(socket);
                    break;

                case "channel":
                    if (model.Join)
                        _subscriptionService.SubscribeChannelDetail(socket, _rider.Channel.Find(split[1]), model.Resolution);
                    else
                        _subscriptionService.UnsubscribeChannelDetail(socket);
                    break;

                case "client":
                    break;

                case "router":
                    break;
            }

            return Task.CompletedTask;
        }

        public Task OnError(Exception exception, SubscriptionRequest model, WebSocketMessage message, IHorseWebSocket client)
        {
            return Task.CompletedTask;
        }
    }
}
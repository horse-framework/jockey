using System;
using System.Linq;
using System.Threading.Tasks;
using Horse.Jockey.Core;
using Horse.Jockey.Models;
using Horse.Jockey.Models.WebSockets;
using Horse.Messaging.Server;
using Horse.WebSocket.Protocol;
using Horse.WebSocket.Server;

namespace Horse.Jockey.Handlers.WebSockets
{
    internal class SubscriptionHandler : IWebSocketMessageHandler<SubscriptionRequest>
    {
        private readonly SubscriptionService _subscriptionService;
        private readonly MessageCounter _counter;
        private readonly HorseRider _rider;
        private readonly IWebSocketServerBus _bus;

        public SubscriptionHandler(SubscriptionService subscriptionService, HorseRider rider, MessageCounter counter, IWebSocketServerBus bus)
        {
            _subscriptionService = subscriptionService;
            _rider = rider;
            _counter = counter;
            _bus = bus;
        }

        public Task Handle(SubscriptionRequest model, WebSocketMessage message, IHorseWebSocket client)
        {
            WsServerSocket socket = (WsServerSocket) client;
            string[] split = model.Channel.Split(':');
            switch (split[0])
            {
                case "dashboard":
                    if (model.Join)
                    {
                        _subscriptionService.SubscribeDashboard(socket);
                        SendQueueFullData(socket);
                        SendChannelFullData(socket);
                        SendRouterFullData(socket);
                        SendDirectFullData(socket);
                    }
                    else
                        _subscriptionService.UnsubscribeDashboard(socket);

                    break;

                case "queue":
                    if (model.Join)
                    {
                        _subscriptionService.SubscribeQueueDetail(socket, _rider.Queue.Find(split[1]), model.Resolution);
                        SendQueueFullData(socket, split[1], model.Resolution);
                    }
                    else
                        _subscriptionService.UnsubscribeQueueDetail(socket);

                    break;

                case "channel":
                    if (model.Join)
                    {
                        _subscriptionService.SubscribeChannelDetail(socket, _rider.Channel.Find(split[1]), model.Resolution);
                        SendChannelFullData(socket, split[1], model.Resolution);
                    }
                    else
                        _subscriptionService.UnsubscribeChannelDetail(socket);

                    break;

                case "client":
                    if (model.Join)
                    {
                        _subscriptionService.SubscribeClientDetail(socket, _rider.Client.Find(split[1]), model.Resolution);
                        SendDirectFullData(socket, split[1], model.Resolution);
                    }
                    else
                        _subscriptionService.UnsubscribeClientDetail(socket);

                    break;

                case "router":
                    break;
            }

            return Task.CompletedTask;
        }

        private void SendQueueFullData(IHorseWebSocket socket, string queueName = null, string resolution = "1m")
        {
            var counter = _counter.GetQueueCounter(queueName);
            var data = counter.GetDataByResolution(resolution);

            QueueGraphModel model = new QueueGraphModel
            {
                Name = queueName ?? "*",
                Resolution = resolution,
                Counts = data.Select(x => new CountRecord(x.UnixTime, x.Received, x.Sent, x.Respond, x.Error, x.Delivered, x.NotRouted, x.Timeout))
            };
            _ = _bus.SendAsync(socket, model);
        }

        private void SendChannelFullData(IHorseWebSocket socket, string channelName = null, string resolution = "1m")
        {
            var counter = _counter.GetChannelCounter(channelName);
            var data = counter.GetDataByResolution(resolution);

            ChannelGraphModel model = new ChannelGraphModel
            {
                Name = channelName ?? "*",
                Resolution = resolution,
                Counts = data.Select(x => new CountRecord(x.UnixTime, x.Received, x.Sent, x.Respond, x.Error, x.Delivered, x.NotRouted, x.Timeout))
            };
            _ = _bus.SendAsync(socket, model);
        }

        private void SendDirectFullData(IHorseWebSocket socket, string clientId = null, string resolution = "1m")
        {
            var counter = _counter.GetDirectCounter(clientId);
            var data = counter.GetDataByResolution(resolution);

            DirectGraphModel model = new DirectGraphModel
            {
                Name = clientId ?? "*",
                Resolution = resolution,
                Counts = data.Select(x => new CountRecord(x.UnixTime, x.Received, x.Sent, x.Respond, x.Error, x.Delivered, x.NotRouted, x.Timeout))
            };
            _ = _bus.SendAsync(socket, model);
        }

        private void SendRouterFullData(IHorseWebSocket socket, string routerName = null, string resolution = "1m")
        {
            var counter = _counter.GetRouterCounter(routerName);
            var data = counter.GetDataByResolution(resolution);

            RouterGraphModel model = new RouterGraphModel
            {
                Name = routerName ?? "*",
                Resolution = resolution,
                Counts = data.Select(x => new CountRecord(x.UnixTime, x.Received, x.Sent, x.Respond, x.Error, x.Delivered, x.NotRouted, x.Timeout))
            };
            _ = _bus.SendAsync(socket, model);
        }

        public Task OnError(Exception exception, SubscriptionRequest model, WebSocketMessage message, IHorseWebSocket client)
        {
            return Task.CompletedTask;
        }
    }
}
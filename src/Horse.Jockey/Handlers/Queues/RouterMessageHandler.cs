using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Horse.Jockey.Core;
using Horse.Jockey.Helpers;
using Horse.Jockey.Models.Subscriptions;
using Horse.Jockey.Models.WebSockets;
using Horse.Mq;
using Horse.Mq.Clients;
using Horse.Mq.Routing;
using Horse.Protocols.Hmq;
using Horse.WebSocket.Models;
using Microsoft.Extensions.DependencyInjection;

namespace Horse.Jockey.Handlers.Queues
{
    internal class RouterMessageHandler : IRouterMessageHandler
    {
        private readonly MessageCounter _counter;
        private readonly SubscriptionService _subscriptionService;

        public RouterMessageHandler(MessageCounter counter, SubscriptionService subscriptionService)
        {
            _counter = counter;
            _subscriptionService = subscriptionService;
        }

        public Task OnRouterNotFound(MqClient sender, HorseMessage message)
        {
            _counter.AddRouterPublish();
            _counter.AddRouterNotFound();
            return Task.CompletedTask;
        }

        public Task OnNotRouted(MqClient sender, IRouter router, HorseMessage message)
        {
            _counter.AddRouterPublish();
            _counter.AddRouterFailed();
            SendToConsole(router, message, "Not Routed");
            return Task.CompletedTask;
        }

        public Task OnRouted(MqClient sender, IRouter router, HorseMessage message)
        {
            _counter.AddRouterPublish();
            _counter.AddRouterOk();
            SendToConsole(router, message, "Routed");
            return Task.CompletedTask;
        }

        private void SendToConsole(IRouter router, HorseMessage message, string status)
        {
            IEnumerable<ConsoleSubscription> subscriptions = _subscriptionService.FindConsoleSubscribers(router);
            if (subscriptions.Any())
            {
                IWebSocketServerBus bus = Hub.Provider.GetService<IWebSocketServerBus>();
                ConsoleMessage consoleMessage = new ConsoleMessage
                                                {
                                                    Date = DateTime.UtcNow.ToUnixSeconds(),
                                                    Name = router.Name,
                                                    ContentType = message.ContentType,
                                                    MessageId = message.MessageId,
                                                    Message = message.GetStringContent(),
                                                    Status = status
                                                };

                foreach (ConsoleSubscription subscription in subscriptions)
                    _ = bus.SendAsync(subscription.Client, consoleMessage);
            }
        }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Horse.Jockey.Core;
using Horse.Jockey.Helpers;
using Horse.Jockey.Models.Subscriptions;
using Horse.Jockey.Models.WebSockets;
using Horse.Messaging.Protocol;
using Horse.Messaging.Server.Channels;
using Horse.Messaging.Server.Clients;
using Horse.WebSocket.Server;
using Microsoft.Extensions.DependencyInjection;

namespace Horse.Jockey.Handlers.Queues
{
    internal class ChannelEventHandler : BaseHandler, IChannelEventHandler
    {
        private IWebSocketServerBus _bus;
        private readonly SubscriptionService _subscriptionService;
        private readonly MessageCounter _counter;

        internal ChannelEventHandler(SubscriptionService subscriptionService, MessageCounter counter)
        {
            _subscriptionService = subscriptionService;
            _counter = counter;
        }

        private IWebSocketServerBus GetBus()
        {
            if (_bus != null)
                return _bus;

            _bus = GetProvider().GetService<IWebSocketServerBus>();
            return _bus;
        }

        public Task OnCreated(HorseChannel channel)
        {
            _counter.AddChannelCounter(channel.Name);
            return Task.CompletedTask;
        }

        public Task OnRemoved(HorseChannel channel)
        {
            _counter.RemoveChannelCounter(channel.Name);
            return Task.CompletedTask;
        }

        public Task OnPublish(HorseChannel channel, HorseMessage message)
        {
            IEnumerable<ConsoleSubscription> subscriptions = _subscriptionService.FindConsoleSubscribers(channel).ToList();
            if (!subscriptions.Any()) return Task.CompletedTask;

            IWebSocketServerBus bus = GetBus();
            ConsoleMessage consoleMessage = new()
            {
                Date = DateTime.UtcNow.ToUnixSeconds(),
                Name = channel.Name,
                MessageId = message.MessageId,
                Message = message.GetStringContent(),
                Status = "Published"
            };

            foreach (ConsoleSubscription subscription in subscriptions)
                _ = bus.SendAsync(subscription.Client, consoleMessage);

            return Task.CompletedTask;
        }

        public Task OnSubscribe(HorseChannel channel, MessagingClient client)
        {
            return Task.CompletedTask;
        }

        public Task OnUnsubscribe(HorseChannel channel, MessagingClient client)
        {
            return Task.CompletedTask;
        }
    }
}
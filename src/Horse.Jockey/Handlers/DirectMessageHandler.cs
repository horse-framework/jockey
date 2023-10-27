using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Horse.Jockey.Core;
using Horse.Jockey.Helpers;
using Horse.Jockey.Models.Subscriptions;
using Horse.Jockey.Models.WebSockets;
using Horse.Messaging.Protocol;
using Horse.Messaging.Server.Clients;
using Horse.Messaging.Server.Direct;
using Horse.WebSocket.Server;
using Microsoft.Extensions.DependencyInjection;

namespace Horse.Jockey.Handlers.Queues
{
    internal class DirectMessageHandler : IDirectMessageHandler
    {
        private readonly MessageCounter _messageCounter;
        private readonly SubscriptionService _subscriptionService;

        public DirectMessageHandler(MessageCounter messageCounter, SubscriptionService subscriptionService)
        {
            _messageCounter = messageCounter;
            _subscriptionService = subscriptionService;
        }

        public Task OnDirect(MessagingClient sender, HorseMessage message, List<MessagingClient> receivers)
        {
            _messageCounter.AddDirectMessage(sender.UniqueId, message.Target);

            if (receivers.Count > 0)
                _messageCounter.AddDirectDelivery(sender.UniqueId, receivers.Count, receivers.Select(x => x.UniqueId));

            IEnumerable<ConsoleSubscription> subscriptions = _subscriptionService.FindConsoleSubscribers(message).ToList();
            if (!subscriptions.Any()) return Task.CompletedTask;

            IWebSocketServerBus bus = Hub.Provider.GetRequiredService<IWebSocketServerBus>();
            ConsoleMessage consoleMessage = new()
            {
                Date = DateTime.UtcNow.ToUnixSeconds(),
                Name = message.Target,
                ContentType = message.ContentType,
                MessageId = message.MessageId,
                Message = message.GetStringContent(),
                Status = receivers.Count > 0 ? "Delivered" : "Not Delivered"
            };

            foreach (ConsoleSubscription subscription in subscriptions)
                _ = bus.SendAsync(subscription.Client, consoleMessage);

            return Task.CompletedTask;
        }

        public Task OnNotFound(MessagingClient sender, HorseMessage message)
        {
            _messageCounter.AddDirectNotFound(sender.UniqueId, message.Target);
            return Task.CompletedTask;
        }

        public Task OnResponse(MessagingClient sender, HorseMessage message, MessagingClient receiver)
        {
            _messageCounter.AddDirectResponse(sender.UniqueId, message.Target);
            return Task.CompletedTask;
        }
    }
}
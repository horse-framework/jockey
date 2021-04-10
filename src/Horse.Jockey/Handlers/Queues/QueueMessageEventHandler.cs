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
using Horse.Mq.Delivery;
using Horse.Mq.Queues;
using Horse.Protocols.Hmq;
using Horse.WebSocket.Models;
using Microsoft.Extensions.DependencyInjection;

namespace Horse.Jockey.Handlers.Queues
{
    internal class QueueMessageEventHandler : BaseHandler, IQueueMessageEventHandler
    {
        private readonly SubscriptionService _subscriptionService;
        private IWebSocketServerBus _bus;

        public QueueMessageEventHandler(SubscriptionService subscriptionService)
        {
            _subscriptionService = subscriptionService;
        }

        private IWebSocketServerBus GetBus()
        {
            if (_bus != null)
                return _bus;

            _bus = GetProvider().GetService<IWebSocketServerBus>();
            return _bus;
        }

        public Task OnProduced(HorseQueue queue, QueueMessage message, MqClient sender)
        {
            IEnumerable<ConsoleSubscription> subscriptions = _subscriptionService.FindConsoleSubscribers(queue);

            if (subscriptions.Any())
            {
                IWebSocketServerBus bus = GetBus();
                ConsoleMessage consoleMessage = new ConsoleMessage
                                                {
                                                    Date = DateTime.UtcNow.ToUnixSeconds(),
                                                    Name = queue.Name,
                                                    MessageId = message.Message.MessageId,
                                                    Message = message.Message.GetStringContent(),
                                                    Status = "Produced"
                                                };

                foreach (ConsoleSubscription subscription in subscriptions)
                    _ = bus.SendAsync(subscription.Client, consoleMessage);
            }

            return Task.CompletedTask;
        }

        public Task OnConsumed(HorseQueue queue, MessageDelivery delivery, MqClient receiver)
        {
            return Task.CompletedTask;
        }

        public Task OnAcknowledged(HorseQueue queue, HorseMessage acknowledgeMessage, MessageDelivery delivery, bool success)
        {
            return Task.CompletedTask;
        }

        public Task MessageTimedOut(HorseQueue queue, QueueMessage message)
        {
            return Task.CompletedTask;
        }

        public Task OnAcknowledgeTimedOut(HorseQueue queue, MessageDelivery delivery)
        {
            return Task.CompletedTask;
        }
    }
}
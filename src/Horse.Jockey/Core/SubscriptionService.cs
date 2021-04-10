using System;
using System.Collections.Generic;
using System.Linq;
using Horse.Jockey.Helpers;
using Horse.Jockey.Models.Subscriptions;
using Horse.Mq.Queues;
using Horse.Mq.Routing;
using Horse.Protocols.Hmq;
using Horse.Protocols.WebSocket;

namespace Horse.Jockey.Core
{
    public class SubscriptionService
    {
        private readonly List<ConsoleSubscription> _console = new List<ConsoleSubscription>();
        private readonly List<QueueDetailSubscription> _queue = new List<QueueDetailSubscription>();
        private readonly List<WsServerSocket> _dashboard = new List<WsServerSocket>();

        #region Console

        public void SubscribeConsole(WsServerSocket client, SubscriptionSource source, SubscriptionTargetType targetType, string target)
        {
            UnsubscribeConsole(client);

            ConsoleSubscription consoleSubscription = new ConsoleSubscription
                                                      {
                                                          Client = client,
                                                          Source = source,
                                                          TargetType = targetType,
                                                          Target = target
                                                      };

            lock (_console)
                _console.Add(consoleSubscription);
        }

        public void UnsubscribeConsole(WsServerSocket client)
        {
            lock (_console)
            {
                int index = _console.FindIndex(x => x.Client == client);
                if (index < 0)
                    return;

                _console.RemoveAt(index);
            }
        }

        public IEnumerable<ConsoleSubscription> FindConsoleSubscribers(HorseMessage directMessage)
        {
            List<ConsoleSubscription> result = new List<ConsoleSubscription>();

            string targetId = directMessage.Target.Contains('@') ? null : directMessage.Target;
            string targetName = directMessage.Target.StartsWith("@name:", StringComparison.InvariantCultureIgnoreCase) ? directMessage.Target.Substring(6) : null;
            string targetType = directMessage.Target.StartsWith("@type:", StringComparison.InvariantCultureIgnoreCase) ? directMessage.Target.Substring(6) : null;

            lock (_console)
                foreach (ConsoleSubscription subscription in _console)
                {
                    if (subscription.Source != SubscriptionSource.Direct)
                        continue;

                    if (subscription.TargetType == SubscriptionTargetType.Id)
                    {
                        if (!string.IsNullOrEmpty(targetId) && targetId.AsteriskEquals(subscription.Target))
                            result.Add(subscription);
                    }
                    else if (subscription.TargetType == SubscriptionTargetType.Name)
                    {
                        if (!string.IsNullOrEmpty(targetName) && targetName.AsteriskEquals(subscription.Target))
                            result.Add(subscription);
                    }
                    else if (subscription.TargetType == SubscriptionTargetType.Type)
                    {
                        if (!string.IsNullOrEmpty(targetType) && targetType.AsteriskEquals(subscription.Target))
                            result.Add(subscription);
                    }
                }

            return result;
        }

        public IEnumerable<ConsoleSubscription> FindConsoleSubscribers(IRouter router)
        {
            List<ConsoleSubscription> result = new List<ConsoleSubscription>();

            lock (_console)
                foreach (ConsoleSubscription subscription in _console)
                {
                    if (subscription.Source != SubscriptionSource.Router)
                        continue;

                    if (subscription.TargetType == SubscriptionTargetType.Name)
                    {
                        if (router.Name.AsteriskEquals(subscription.Target))
                            result.Add(subscription);
                    }
                }

            return result;
        }

        public IEnumerable<ConsoleSubscription> FindConsoleSubscribers(HorseQueue queue)
        {
            List<ConsoleSubscription> result = new List<ConsoleSubscription>();

            lock (_console)
                foreach (ConsoleSubscription subscription in _console)
                {
                    if (subscription.Source != SubscriptionSource.Queue)
                        continue;

                    if (subscription.TargetType == SubscriptionTargetType.Name)
                    {
                        if (queue.Name.AsteriskEquals(subscription.Target))
                            result.Add(subscription);
                    }
                    else if (subscription.TargetType == SubscriptionTargetType.Topic)
                    {
                        if (queue.Topic.AsteriskEquals(subscription.Target))
                            result.Add(subscription);
                    }
                }

            return result;
        }

        #endregion

        #region Queue

        public void SubscribeQueueDetail(WsServerSocket client, HorseQueue queue)
        {
            UnsubscribeQueueDetail(client);

            QueueDetailSubscription subscription = new QueueDetailSubscription
                                                   {
                                                       Client = client,
                                                       Queue = queue
                                                   };
            lock (_queue)
                _queue.Add(subscription);
        }

        public void UnsubscribeQueueDetail(WsServerSocket client)
        {
            lock (_queue)
            {
                int index = _queue.FindIndex(x => x.Client == client);
                if (index < 0)
                    return;

                _queue.RemoveAt(index);
            }
        }

        public IEnumerable<QueueDetailSubscription> FindQueueDetailSubscribers(string queueName)
        {
            List<QueueDetailSubscription> list;
            lock (_queue)
                list = new List<QueueDetailSubscription>(_queue.Where(x => x.Queue.Name.Equals(queueName)));

            return list;
        }

        #endregion

        #region Dashboard

        public void SubscribeDashboard(WsServerSocket client)
        {
            lock (_dashboard)
            {
                if (!_dashboard.Contains(client))
                    _dashboard.Add(client);
            }
        }

        public void UnsubscribeDashboard(WsServerSocket client)
        {
            lock (_dashboard)
                _dashboard.Remove(client);
        }

        public IEnumerable<WsServerSocket> GetDashboardSubscribers()
        {
            List<WsServerSocket> result;
            lock (_dashboard)
                result = new List<WsServerSocket>(_dashboard);

            return result;
        }

        #endregion
    }
}
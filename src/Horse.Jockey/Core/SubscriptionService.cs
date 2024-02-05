using System;
using System.Collections.Generic;
using System.Linq;
using Horse.Jockey.Helpers;
using Horse.Jockey.Models.Subscriptions;
using Horse.Messaging.Protocol;
using Horse.Messaging.Server.Channels;
using Horse.Messaging.Server.Clients;
using Horse.Messaging.Server.Queues;
using Horse.Messaging.Server.Routing;
using Horse.WebSocket.Protocol;

namespace Horse.Jockey.Core
{
    internal class SubscriptionService
    {
        private readonly List<ConsoleSubscription> _console = new();
        private readonly List<ChannelDetailSubscription> _channels = new();
        private readonly List<QueueDetailSubscription> _queues = new();
        private readonly List<ClientDetailSubscription> _clients = new();
        private readonly List<WsServerSocket> _dashboard = new();

        #region Console

        public void SubscribeConsole(WsServerSocket client, SubscriptionSource source, SubscriptionTargetType targetType, string target)
        {
            UnsubscribeConsole(client);

            ConsoleSubscription consoleSubscription = new()
            {
                Client = client,
                Source = source,
                TargetType = targetType,
                Target = target
            };

            lock (_console)
            {
                _console.Add(consoleSubscription);
            }
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
            List<ConsoleSubscription> result = new();

            string targetId = directMessage.Target.Contains('@') ? null : directMessage.Target;
            string targetName = directMessage.Target.StartsWith("@name:", StringComparison.InvariantCultureIgnoreCase) ? directMessage.Target.Substring(6) : null;
            string targetType = directMessage.Target.StartsWith("@type:", StringComparison.InvariantCultureIgnoreCase) ? directMessage.Target.Substring(6) : null;

            lock (_console)
            {
                foreach (ConsoleSubscription subscription in _console)
                {
                    if (subscription.Source == SubscriptionSource.All)
                    {
                        result.Add(subscription);
                        continue;
                    }

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
            }

            return result;
        }

        public IEnumerable<ConsoleSubscription> FindConsoleSubscribers(Router router)
        {
            List<ConsoleSubscription> result = new();

            lock (_console)
            {
                foreach (ConsoleSubscription subscription in _console)
                {
                    if (subscription.Source == SubscriptionSource.All)
                    {
                        result.Add(subscription);
                        continue;
                    }

                    if (subscription.Source != SubscriptionSource.Router)
                        continue;

                    if (subscription.TargetType == SubscriptionTargetType.Name)
                        if (router.Name.AsteriskEquals(subscription.Target))
                            result.Add(subscription);
                }
            }

            return result;
        }

        public IEnumerable<ConsoleSubscription> FindConsoleSubscribers(HorseQueue queue)
        {
            List<ConsoleSubscription> result = new();

            lock (_console)
            {
                foreach (ConsoleSubscription subscription in _console)
                {
                    if (subscription.Source == SubscriptionSource.All)
                    {
                        result.Add(subscription);
                        continue;
                    }

                    if (subscription.Source != SubscriptionSource.Queue)
                        continue;

                    if (subscription.TargetType == SubscriptionTargetType.Name)
                    {
                        if (queue.Name.AsteriskEquals(subscription.Target))
                            result.Add(subscription);
                    }
                    else if (subscription.TargetType == SubscriptionTargetType.Topic)
                    {
                        if (queue.Topic != null && queue.Topic.AsteriskEquals(subscription.Target))
                            result.Add(subscription);
                    }
                }
            }

            return result;
        }

        public IEnumerable<ConsoleSubscription> FindConsoleSubscribers(HorseChannel channel)
        {
            List<ConsoleSubscription> result = new();

            lock (_console)
            {
                foreach (ConsoleSubscription subscription in _console)
                {
                    if (subscription.Source == SubscriptionSource.All)
                    {
                        result.Add(subscription);
                        continue;
                    }

                    if (subscription.Source != SubscriptionSource.Channel)
                        continue;

                    if (subscription.TargetType == SubscriptionTargetType.Name)
                    {
                        if (channel.Name.AsteriskEquals(subscription.Target))
                            result.Add(subscription);
                    }
                    else if (subscription.TargetType == SubscriptionTargetType.Topic)
                    {
                        if (channel.Topic != null && channel.Topic.AsteriskEquals(subscription.Target))
                            result.Add(subscription);
                    }
                }
            }

            return result;
        }

        #endregion

        #region Queue

        public void SubscribeQueueDetail(WsServerSocket client, HorseQueue queue)
        {
            UnsubscribeQueueDetail(client);

            QueueDetailSubscription subscription = new()
            {
                Client = client,
                Queue = queue
            };
            lock (_queues)
            {
                _queues.Add(subscription);
            }
        }

        public void UnsubscribeQueueDetail(WsServerSocket client)
        {
            lock (_queues)
            {
                int index = _queues.FindIndex(x => x.Client == client);
                if (index < 0)
                    return;

                _queues.RemoveAt(index);
            }
        }

        public List<QueueDetailSubscription> FindQueueDetailSubscribers(string queueName)
        {
            List<QueueDetailSubscription> list;
            lock (_queues)
            {
                list = new List<QueueDetailSubscription>(_queues.Where(x => x.Queue.Name.Equals(queueName)));
            }

            return list;
        }

        public List<QueueDetailSubscription> GetAllQueueDetailSubscribers()
        {
            List<QueueDetailSubscription> list;
            lock (_queues)
                list = new List<QueueDetailSubscription>(_queues);

            return list;
        }

        #endregion

        #region Channel

        public void SubscribeChannelDetail(WsServerSocket client, HorseChannel channel)
        {
            UnsubscribeChannelDetail(client);

            ChannelDetailSubscription subscription = new()
            {
                Client = client,
                Channel = channel
            };

            lock (_channels)
                _channels.Add(subscription);
        }

        public void UnsubscribeChannelDetail(WsServerSocket client)
        {
            lock (_channels)
            {
                int index = _channels.FindIndex(x => x.Client == client);
                if (index < 0)
                    return;

                _channels.RemoveAt(index);
            }
        }

        public List<ChannelDetailSubscription> FindChannelDetailSubscribers(string channelName)
        {
            List<ChannelDetailSubscription> list;
            lock (_channels)
            {
                list = new List<ChannelDetailSubscription>(_channels.Where(x => x.Channel.Name.Equals(channelName)));
            }

            return list;
        }

        public List<ChannelDetailSubscription> GetAllChannelDetailSubscribers()
        {
            List<ChannelDetailSubscription> list;
            lock (_channels)
                list = new List<ChannelDetailSubscription>(_channels);

            return list;
        }

        #endregion

        #region Client

        public void SubscribeClientDetail(WsServerSocket client, MessagingClient target)
        {
            UnsubscribeClientDetail(client);

            ClientDetailSubscription subscription = new()
            {
                Client = client,
                TargetClient = target
            };

            lock (_clients)
                _clients.Add(subscription);
        }

        public void UnsubscribeClientDetail(WsServerSocket client)
        {
            lock (_clients)
            {
                int index = _clients.FindIndex(x => x.Client == client);
                if (index < 0)
                    return;

                _clients.RemoveAt(index);
            }
        }

        public List<ClientDetailSubscription> FindClientDetailSubscribers(string clientId)
        {
            List<ClientDetailSubscription> list;
            lock (_clients)
            {
                list = new List<ClientDetailSubscription>(_clients.Where(x => x.TargetClient.UniqueId.Equals(clientId)));
            }

            return list;
        }

        public List<ClientDetailSubscription> GetAllClientDetailSubscribers()
        {
            List<ClientDetailSubscription> list;
            lock (_clients)
                list = new List<ClientDetailSubscription>(_clients);

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
            {
                _dashboard.Remove(client);
            }
        }

        public List<WsServerSocket> GetDashboardSubscribers()
        {
            List<WsServerSocket> result;
            lock (_dashboard)
            {
                result = new List<WsServerSocket>(_dashboard);
            }

            return result;
        }

        #endregion
    }
}
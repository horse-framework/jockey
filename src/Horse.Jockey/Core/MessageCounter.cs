using System;
using System.Collections.Generic;
using System.Linq;
using Horse.Jockey.Helpers;
using Horse.Jockey.Models;
using Horse.Jockey.Models.Subscriptions;
using Horse.Jockey.Models.WebSockets;
using Horse.Messaging.Protocol.Models;
using Horse.Messaging.Server;
using Horse.Messaging.Server.Channels;
using Horse.Messaging.Server.Queues;
using Horse.Messaging.Server.Routing;
using Horse.WebSocket.Protocol;
using Horse.WebSocket.Server;
using Microsoft.Extensions.DependencyInjection;
using Timer = System.Timers.Timer;

namespace Horse.Jockey.Core;

internal class MessageCounter
{
    #region Fields

    private readonly CountableObject _channelTotal = new CountableObject("*");
    private readonly CountableObject _queueTotal = new CountableObject("*");
    private readonly CountableObject _queueStoreTotal = new CountableObject("*");
    private readonly CountableObject _directTotal = new CountableObject("*");
    private readonly CountableObject _routerTotal = new CountableObject("*");

    private readonly SortedDictionary<string, CountableObject> _channelCounters = new SortedDictionary<string, CountableObject>(StringComparer.InvariantCultureIgnoreCase);
    private readonly SortedDictionary<string, CountableObject> _queueCounters = new SortedDictionary<string, CountableObject>(StringComparer.InvariantCultureIgnoreCase);
    private readonly SortedDictionary<string, CountableObject> _queueStoreCounters = new SortedDictionary<string, CountableObject>(StringComparer.InvariantCultureIgnoreCase);
    private readonly SortedDictionary<string, CountableObject> _routerCounters = new SortedDictionary<string, CountableObject>(StringComparer.InvariantCultureIgnoreCase);
    private readonly SortedDictionary<string, CountableObject> _directCounters = new SortedDictionary<string, CountableObject>(StringComparer.InvariantCultureIgnoreCase);

    private Timer _runner;
    private readonly HorseRider _rider;
    private IWebSocketServerBus _bus;
    private SubscriptionService _subscriptionService;

    #endregion

    #region Get Counter

    private IWebSocketServerBus GetBus()
    {
        if (_bus != null)
            return _bus;

        _bus = Hub.Provider.GetService<IWebSocketServerBus>();
        return _bus;
    }

    private SubscriptionService GetSubscriptionService()
    {
        if (_subscriptionService != null)
            return _subscriptionService;

        _subscriptionService = Hub.Provider.GetService<SubscriptionService>();
        return _subscriptionService;
    }

    public void AddChannelCounter(string channeName)
    {
        lock (_channelCounters)
            _channelCounters[channeName] = new CountableObject(channeName);
    }

    public void RemoveChannelCounter(string channeName)
    {
        lock (_channelCounters)
            _channelCounters.Remove(channeName);
    }

    public CountableObject GetChannelCounter(string channelName = null)
    {
        if (string.IsNullOrEmpty(channelName))
            return _channelTotal;

        return FindCountable(_channelCounters, channelName);
    }

    public void AddQueueCounter(string queueName)
    {
        lock (_queueStoreCounters)
            _queueStoreCounters[queueName] = new CountableObject(queueName);

        lock (_queueCounters)
            _queueCounters[queueName] = new CountableObject(queueName);
    }

    public void RemoveQueueCounter(string queueName)
    {
        lock (_queueStoreCounters)
            _queueStoreCounters.Remove(queueName);

        lock (_queueCounters)
            _queueCounters.Remove(queueName);
    }

    public CountableObject GetQueueCounter(string queueName = null)
    {
        if (string.IsNullOrEmpty(queueName))
            return _queueTotal;

        return FindCountable(_queueCounters, queueName);
    }

    public CountableObject GetQueueStoreCounter(string queueName = null)
    {
        if (string.IsNullOrEmpty(queueName))
            return _queueStoreTotal;

        return FindCountable(_queueStoreCounters, queueName);
    }

    public CountableObject GetRouterCounter(string routerName = null)
    {
        if (string.IsNullOrEmpty(routerName))
            return _routerTotal;

        return FindCountable(_routerCounters, routerName);
    }

    public void AddDirectCounter(string uniqueId)
    {
        lock (_directCounters)
            _directCounters[uniqueId] = new CountableObject(uniqueId);
    }

    public void RemoveDirectCounter(string uniqueId)
    {
        lock (_directCounters)
            _directCounters.Remove(uniqueId);
    }

    public CountableObject GetDirectCounter(string clientId = null)
    {
        if (string.IsNullOrEmpty(clientId))
            return _directTotal;

        return FindCountable(_directCounters, clientId);
    }

    private static CountableObject FindCountable(SortedDictionary<string, CountableObject> dictionary, string name)
    {
        try
        {
            bool found = dictionary.TryGetValue(name, out CountableObject counter);

            if (!found)
            {
                lock (dictionary)
                {
                    counter = new CountableObject(name);
                    dictionary.Add(name, counter);
                }
            }

            return counter;
        }
        catch
        {
            return new CountableObject(name);
        }
    }

    #endregion

    #region Run

    public MessageCounter(HorseRider rider)
    {
        _rider = rider;
    }

    public void Run()
    {
        _runner = new Timer(5000);
        _runner.Elapsed += (_, _) =>
        {
            TickQueues();
            TickChannels();
            TickRouters();
            TickDirect();
        };

        foreach (HorseQueue queue in _rider.Queue.Queues)
            AddQueueCounter(queue.Name);

        foreach (HorseChannel channel in _rider.Channel.Channels)
            AddChannelCounter(channel.Name);

        _runner.AutoReset = true;
        _runner.Start();
    }

    private void TickQueues()
    {
        List<QueueInfo> queueInfoList = _rider.Queue.Queues
            .Select(x => x.Info)
            .ToList();

        _queueTotal.Tick(new MessageCount
        {
            UnixTime = DateTime.UtcNow.ToUnixSeconds(),
            Received = queueInfoList.Sum(x => x.ReceivedMessages),
            NotRouted = queueInfoList.Sum(x => x.Unacknowledges),
            Timeout = queueInfoList.Sum(x => x.TimedOutMessages),
            Sent = queueInfoList.Sum(x => x.SentMessages),
            Delivered = queueInfoList.Sum(x => x.Acknowledges),
            Error = queueInfoList.Sum(x => x.ErrorCount),
            Respond = queueInfoList.Sum(x => x.NegativeAcknowledge)
        });

        List<CountableObject> removingObjects = new List<CountableObject>();
        lock (_queueCounters)
        {
            foreach (CountableObject countable in _queueCounters.Values)
            {
                HorseQueue queue = _rider.Queue.Find(countable.Name);
                if (queue != null)
                    countable.Tick(new MessageCount
                    {
                        UnixTime = DateTime.UtcNow.ToUnixSeconds(),
                        Received = queue.Info.ReceivedMessages,
                        NotRouted = queue.Info.Unacknowledges,
                        Timeout = queue.Info.TimedOutMessages,
                        Sent = queue.Info.SentMessages,
                        Delivered = queue.Info.Acknowledges,
                        Error = queue.Info.ErrorCount,
                        Respond = queue.Info.NegativeAcknowledge
                    });
                else
                    removingObjects.Add(countable);
            }

            foreach (CountableObject removingObject in removingObjects)
                _queueCounters.Remove(removingObject.Name);
        }

        removingObjects.Clear();
        List<MessageCount> storeCounts = new List<MessageCount>();
        lock (_queueStoreCounters)
        {
            foreach (CountableObject counter in _queueStoreCounters.Values)
            {
                HorseQueue queue = _rider.Queue.Find(counter.Name);
                if (queue != null && queue.Manager != null)
                {
                    MessageCount count = new MessageCount
                    {
                        UnixTime = DateTime.UtcNow.ToUnixSeconds(),
                        Received = queue.Manager.MessageStore.Count(),
                        Delivered = queue.Manager.PriorityMessageStore.Count(),
                        Respond = queue.Manager.DeliveryHandler.Tracker.GetDeliveryCount(),
                        NotRouted = queue.GetMessageCountPendingForPutBack(),
                        Sent = queue.ProcessingMessage != null ? 1 : 0
                    };
                    counter.Tick(count, false);
                    storeCounts.Add(count);
                }
                else
                    removingObjects.Add(counter);
            }

            foreach (CountableObject removingObject in removingObjects)
                _queueCounters.Remove(removingObject.Name);
        }

        _queueStoreTotal.Tick(new MessageCount
        {
            UnixTime = DateTime.UtcNow.ToUnixSeconds(),
            Received = storeCounts.Sum(x => x.Received),
            Delivered = storeCounts.Sum(x => x.Delivered),
            Respond = storeCounts.Sum(x => x.Respond),
            NotRouted = storeCounts.Sum(x => x.NotRouted),
            Sent = storeCounts.Sum(x => x.Sent)
        }, false);

        IWebSocketServerBus bus = GetBus();
        SubscriptionService subscriptionService = GetSubscriptionService();

        List<QueueDetailSubscription> queueSubs = _subscriptionService.GetAllQueueDetailSubscribers();
        List<WsServerSocket> dashboardSubs = subscriptionService.GetDashboardSubscribers();

        if (dashboardSubs.Count > 0)
        {
            MessageCount current = _queueTotal.GetCurrent();
            QueueGraphModel model = new QueueGraphModel
            {
                Name = "*",
                Resolution = "1m",
                Counts = new[] {new CountRecord(current.UnixTime, current.Received, current.Sent, current.Respond, current.Error, current.Delivered, current.NotRouted, current.Timeout)}
            };

            MessageCount currentStore = _queueStoreTotal.GetCurrent();
            QueueStoreGraphModel storeModel = new QueueStoreGraphModel
            {
                Name = "*",
                Resolution = "1m",
                Counts = new[] {new CountRecord(currentStore.UnixTime, currentStore.Received, currentStore.Sent, currentStore.Respond, currentStore.Error, currentStore.Delivered, currentStore.NotRouted, currentStore.Timeout)}
            };

            foreach (WsServerSocket socket in dashboardSubs)
            {
                _ = bus.SendAsync(socket, model);
                _ = bus.SendAsync(socket, storeModel);
            }
        }

        foreach (QueueDetailSubscription sub in queueSubs)
        {
            CountableObject countable = GetQueueCounter(sub.Queue.Name);
            MessageCount current = countable.GetCurrentByResolution(sub.Resolution);
            
            if (current == null)
                continue;

            QueueGraphModel model = new QueueGraphModel
            {
                Name = sub.Queue.Name,
                Counts = new[] {new CountRecord(current.UnixTime, current.Received, current.Sent, current.Respond, current.Error, current.Delivered, current.NotRouted, current.Timeout)},
                Resolution = sub.Resolution
            };
            _ = _bus.SendAsync(sub.Client, model);
        }
    }

    private void TickChannels()
    {
        List<CountableObject> removingObjects = new List<CountableObject>();
        List<ChannelInformation> channelInfoList = _rider.Channel.Channels
            .Select(x => x.Info)
            .ToList();

        _channelTotal.Tick(new MessageCount
        {
            UnixTime = DateTime.UtcNow.ToUnixSeconds(),
            Received = channelInfoList.Sum(x => x.Received),
            Sent = channelInfoList.Sum(x => x.Published)
        });

        lock (_channelCounters)
        {
            foreach (CountableObject counter in _channelCounters.Values)
            {
                HorseChannel channel = _rider.Channel.Find(counter.Name);
                if (channel != null)
                    counter.Tick(new MessageCount
                    {
                        UnixTime = DateTime.UtcNow.ToUnixSeconds(),
                        Received = channel.Info.Received,
                        Sent = channel.Info.Published
                    });
                else
                    removingObjects.Add(counter);
            }

            foreach (CountableObject removingObject in removingObjects)
                _channelCounters.Remove(removingObject.Name);
        }

        IWebSocketServerBus bus = GetBus();
        SubscriptionService subscriptionService = GetSubscriptionService();

        List<ChannelDetailSubscription> chSubs = _subscriptionService.GetAllChannelDetailSubscribers();
        List<WsServerSocket> dashboardSubs = subscriptionService.GetDashboardSubscribers();

        if (dashboardSubs.Count > 0)
        {
            MessageCount current = _channelTotal.GetCurrent();
            ChannelGraphModel model = new ChannelGraphModel
            {
                Name = "*",
                Resolution = "1m",
                Counts = new[] {new CountRecord(current.UnixTime, current.Received, current.Sent, current.Respond, current.Error, current.Delivered, current.NotRouted, current.Timeout)}
            };

            foreach (WsServerSocket socket in dashboardSubs)
                _ = bus.SendAsync(socket, model);
        }

        foreach (ChannelDetailSubscription sub in chSubs)
        {
            CountableObject countable = GetChannelCounter(sub.Channel.Name);
            MessageCount current = countable.GetCurrentByResolution(sub.Resolution);
            
            if (current == null)
                continue;
            
            QueueGraphModel model = new QueueGraphModel
            {
                Name = sub.Channel.Name,
                Counts = new[] {new CountRecord(current.UnixTime, current.Received, current.Sent, current.Respond, current.Error, current.Delivered, current.NotRouted, current.Timeout)},
                Resolution = sub.Resolution
            };
            _ = _bus.SendAsync(sub.Client, model);
        }
    }

    private void TickRouters()
    {
        IWebSocketServerBus bus = GetBus();
        SubscriptionService subscriptionService = GetSubscriptionService();
        List<WsServerSocket> dashboardSubs = subscriptionService.GetDashboardSubscribers();

        if (dashboardSubs.Count > 0)
        {
            MessageCount current = _routerTotal.GetCurrent();
            RouterGraphModel model = new RouterGraphModel
            {
                Name = "*",
                Resolution = "1m",
                Counts = new[] {new CountRecord(current.UnixTime, current.Received, current.Sent, current.Respond, current.Error, current.Delivered, current.NotRouted, current.Timeout)}
            };

            foreach (WsServerSocket socket in dashboardSubs)
                _ = bus.SendAsync(socket, model);
        }

        _routerTotal.Tick(null);

        List<CountableObject> removingObjects = new List<CountableObject>();

        lock (_routerCounters)
        {
            foreach (CountableObject counter in _routerCounters.Values)
            {
                Router router = _rider.Router.Find(counter.Name);
                if (router != null)
                    counter.Tick(null);
                else
                    removingObjects.Add(counter);
            }

            foreach (CountableObject removingObject in removingObjects)
                _routerCounters.Remove(removingObject.Name);
        }
    }

    private void TickDirect()
    {
        IWebSocketServerBus bus = GetBus();
        SubscriptionService subscriptionService = GetSubscriptionService();
        List<WsServerSocket> dashboardSubs = subscriptionService.GetDashboardSubscribers();

        if (dashboardSubs.Count > 0)
        {
            MessageCount current = _directTotal.GetCurrent();
            DirectGraphModel model = new DirectGraphModel
            {
                Name = "*",
                Resolution = "1m",
                Counts = new[] {new CountRecord(current.UnixTime, current.Received, current.Sent, current.Respond, current.Error, current.Delivered, current.NotRouted, current.Timeout)}
            };

            foreach (WsServerSocket socket in dashboardSubs)
                _ = bus.SendAsync(socket, model);
        }

        _directTotal.Tick(null);

        List<CountableObject> removingObjects = new List<CountableObject>();

        lock (_directCounters)
        {
            foreach (CountableObject counter in _directCounters.Values)
            {
                var client = _rider.Client.Find(counter.Name);
                if (client != null)
                    counter.Tick(null);
                else
                    removingObjects.Add(counter);
            }

            foreach (CountableObject removingObject in removingObjects)
                _directCounters.Remove(removingObject.Name);
        }
    }

    #endregion

    #region Incremental Events

    internal void AddDirectMessage(string source, string target)
    {
        CountableObject sourceCounter = GetDirectCounter(source);
        MessageCount sourceCount = sourceCounter.GetCurrent();
        MessageCount totalCount = _directTotal.GetCurrent();

        sourceCount.Sent++;
        totalCount.Sent++;
    }

    internal void AddDirectDelivery(string source, int count, IEnumerable<string> receivers)
    {
        foreach (string receiver in receivers)
        {
            CountableObject targetCounter = GetDirectCounter(receiver);
            MessageCount targetCount = targetCounter.GetCurrent();
            targetCount.Received++;
        }

        MessageCount totalCount = _directTotal.GetCurrent();
        totalCount.Received += count;
    }

    internal void AddDirectResponse(string source, string target)
    {
        CountableObject sourceCounter = GetDirectCounter(source);
        CountableObject targetCounter = GetDirectCounter(target);

        MessageCount sourceCount = sourceCounter.GetCurrent();
        MessageCount targetCount = targetCounter.GetCurrent();
        MessageCount totalCount = _directTotal.GetCurrent();

        sourceCount.Sent++;
        targetCount.Respond++;
        totalCount.Respond++;
        totalCount.Sent++;
    }

    internal void AddDirectNotFound(string source, string target)
    {
        var total = _routerTotal.GetCurrent();
        MessageCount totalCount = _directTotal.GetCurrent();
        totalCount.NotRouted++;
        total.NotRouted++;
    }

    internal void AddNotRouted(string router)
    {
        var counter = GetRouterCounter(router);
        var count = counter.GetCurrent();
        var total = _routerTotal.GetCurrent();
        count.Received++;
        count.NotRouted++;
        total.Received++;
        total.NotRouted++;
    }

    internal void AddRouted(string router)
    {
        var total = _routerTotal.GetCurrent();
        var counter = GetRouterCounter(router);
        var count = counter.GetCurrent();
        count.Received++;
        count.Sent++;
        total.Received++;
        total.Sent++;
    }

    internal void AddRouterNotFound(string router)
    {
    }

    #endregion
}
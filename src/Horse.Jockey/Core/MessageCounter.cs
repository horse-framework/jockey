using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using Horse.Jockey.Helpers;
using Horse.Jockey.Models;
using Horse.Messaging.Server;
using Horse.Messaging.Server.Channels;
using Horse.Protocols.WebSocket;
using Horse.WebSocket.Models;
using Microsoft.Extensions.DependencyInjection;

namespace Horse.Jockey.Core
{
    internal class MessageCounter
    {
        #region Fields

        private long _directMessage;
        private long _directResponse;
        private long _directNoReceiver;
        private long _directDelivery;

        private long _routerPublish;
        private long _routerNotFound;
        private long _routerOk;
        private long _routerFailed;

        private long _channelPublish;
        private long _channelReceive;

        public long DirectMessage => _directMessage;
        public long DirectResponse => _directResponse;
        public long DirectNoReceiver => _directNoReceiver;
        public long DirectDelivery => _directDelivery;

        public long RouterPublish => _routerPublish;
        public long RouterNotFound => _routerNotFound;
        public long RouterOk => _routerOk;
        public long RouterFailed => _routerFailed;
        
        public long ChannelPublish => _channelPublish;
        public long ChannelReceive => _channelReceive;
        
        private Timer _runner;
        private MessageGraphData _last = new MessageGraphData();
        private readonly Queue<MessageGraphData> _graphData = new Queue<MessageGraphData>(60);
        private IWebSocketServerBus _bus;
        private SubscriptionService _subscriptionService;
        private readonly HorseRider _rider;

        public MessageCounter(HorseRider rider)
        {
            _rider = rider;
        }

        #endregion

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

        public void Run()
        {
            _runner = new Timer(o =>
            {
                long channelPublishTotal = 0;
                long channelReceiveTotal = 0;
                
                foreach (HorseChannel channel in _rider.Channel.Channels)
                {
                    channelPublishTotal += channel.Info.Published;
                    channelReceiveTotal += channel.Info.Received;
                }

                _channelPublish = channelPublishTotal;
                _channelReceive = channelReceiveTotal;
                
                MessageGraphData data = new MessageGraphData
                                        {
                                            Date = DateTime.UtcNow.ToUnixSeconds(),
                                            DirectDelivery = _directDelivery - _last.DirectDelivery,
                                            DirectMessage = _directMessage - _last.DirectMessage,
                                            DirectResponse = _directResponse - _last.DirectResponse,
                                            RouterPublish = _routerPublish - _last.RouterPublish,
                                            RouterNotFound = _routerNotFound - _last.RouterNotFound,
                                            DirectNoReceiver = _directNoReceiver - _last.DirectNoReceiver,
                                            ChannelPublish = _channelPublish - _last.ChannelPublish,
                                            ChannelReceive = _channelReceive - _last.ChannelReceive
                                        };

                lock (_graphData)
                {
                    _graphData.Enqueue(data);

                    if (_graphData.Count > 60)
                        _graphData.Dequeue();
                }

                IWebSocketServerBus bus = GetBus();
                SubscriptionService subscriptionService = GetSubscriptionService();
                IEnumerable<WsServerSocket> subscribers = subscriptionService.GetDashboardSubscribers();

                foreach (WsServerSocket socket in subscribers)
                    _ = bus.SendAsync(socket, data);

                _last = new MessageGraphData
                        {
                            Date = DateTime.UtcNow.ToUnixSeconds(),
                            DirectDelivery = _directDelivery,
                            DirectMessage = _directMessage,
                            DirectResponse = _directResponse,
                            RouterPublish = _routerPublish,
                            RouterNotFound = _routerNotFound,
                            DirectNoReceiver = _directNoReceiver,
                            ChannelPublish = _channelPublish,
                            ChannelReceive = _channelReceive
                        };
            }, null, 1000, 1000);
        }

        public IEnumerable<MessageGraphData> GetGraphData()
        {
            List<MessageGraphData> list;

            lock (_graphData)
                list = _graphData.ToList();

            return list;
        }

        #region Increment

        internal void AddDirectMessage()
        {
            Interlocked.Increment(ref _directMessage);
        }

        internal void AddDirectResponse()
        {
            Interlocked.Increment(ref _directResponse);
        }

        internal void AddDirectNotFound()
        {
            Interlocked.Increment(ref _directNoReceiver);
        }

        internal void AddDirectDelivery(int count)
        {
            Interlocked.Add(ref _directDelivery, count);
        }

        internal void AddRouterPublish()
        {
            Interlocked.Increment(ref _routerPublish);
        }

        internal void AddRouterNotFound()
        {
            Interlocked.Increment(ref _routerNotFound);
        }

        internal void AddRouterOk()
        {
            Interlocked.Increment(ref _routerOk);
        }

        internal void AddRouterFailed()
        {
            Interlocked.Increment(ref _routerFailed);
        }
        
        #endregion
    }
}
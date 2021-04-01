using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using Horse.Core;
using Horse.Jockey.Helpers;
using Horse.Jockey.Models;
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

        public long DirectMessage => _directMessage;
        public long DirectResponse => _directResponse;
        public long DirectNoReceiver => _directNoReceiver;
        public long DirectDelivery => _directDelivery;

        public long RouterPublish => _routerPublish;
        public long RouterNotFound => _routerNotFound;
        public long RouterOk => _routerOk;
        public long RouterFailed => _routerFailed;

        private Timer _runner;
        private readonly Queue<MessageGraphData> _graphData = new Queue<MessageGraphData>(60);
        private IWebSocketServerBus _bus;

        #endregion

        private IWebSocketServerBus GetBus()
        {
            if (_bus != null)
                return _bus;

            _bus = Hub.Provider.GetService<IWebSocketServerBus>();
            return _bus;
        }

        public void Run()
        {
            _runner = new Timer(o =>
            {
                MessageGraphData previous = _graphData.Count == 0 ? new MessageGraphData() : _graphData.LastOrDefault();
                MessageGraphData data = new MessageGraphData
                                        {
                                            Date = DateTime.UtcNow.ToUnixSeconds(),
                                            DirectDelivery = _directDelivery - previous.DirectDelivery,
                                            DirectMessage = _directMessage - previous.DirectMessage,
                                            DirectResponse = _directResponse - previous.DirectResponse,
                                            RouterPublish = _routerPublish - previous.RouterPublish,
                                            RouterNotFound = _routerNotFound - previous.RouterNotFound,
                                            DirectNoReceiver = _directNoReceiver - previous.DirectNoReceiver
                                        };

                lock (_graphData)
                {
                    _graphData.Enqueue(data);

                    if (_graphData.Count > 60)
                        _graphData.Dequeue();
                }

                foreach (SocketBase socketBase in Hub.Clients.List())
                {
                    WsServerSocket ws = (WsServerSocket) socketBase;
                    _ = GetBus().SendAsync(ws, data);
                }
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
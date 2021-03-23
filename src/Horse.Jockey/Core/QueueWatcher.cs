using System;
using System.Collections.Generic;
using System.Threading;
using Horse.Jockey.Models;
using Horse.Mq.Queues;

namespace Horse.Jockey.Core
{
    public class QueueWatcher
    {
        public HorseQueue Queue { get; }

        public HorseQueueStatistics Statistics { get; private set; }
        public HorseQueueInformation Information { get; private set; }

        private DateTime _lastInformationRefreshDate = DateTime.UtcNow.AddDays(-1);
        private readonly TimeSpan _informationRefreshment = TimeSpan.FromSeconds(60);
        private DateTime _lastActiveTime;
        private JockeyOptions _options;
        private Timer _timer;

        private const int GRAPH_DATA_SIZE = 300;
        private readonly Queue<QueueGraphData> _graphData = new(GRAPH_DATA_SIZE);

        public QueueWatcher(HorseQueue queue, JockeyOptions options)
        {
            Queue = queue;
            _options = options;
            _lastActiveTime = DateTime.UtcNow.AddMinutes(-30);
        }

        public void Watch()
        {
            if (_timer != null)
                return;

            Refresh();
            _timer = new Timer(s => Refresh(), null, 1000, 1000);
        }

        public void Destroy()
        {
            try
            {
                if (_timer != null)
                    _timer.Dispose();
            }
            catch
            {
            }

            _timer = null;
        }

        private bool KeepData()
        {
            if (_options.StatisticsKeepAliveDuration == TimeSpan.Zero)
                return true;

            int onlineClients = Hub.Clients.Count();
            if (onlineClients > 0)
            {
                _lastActiveTime = DateTime.UtcNow;
                return true;
            }

            //there is no online admin on website, should we still keep stats data?

            if (_lastActiveTime + _options.StatisticsKeepAliveDuration > DateTime.UtcNow)
                return true;

            return false;
        }

        private void Refresh()
        {
            try
            {
                if (!KeepData())
                {
                    lock (_graphData)
                        if (_graphData.Count > 0)
                            _graphData.Clear();

                    return;
                }

                Statistics = HorseQueueStatistics.Create(Queue);

                QueueGraphData graphData = new QueueGraphData
                                           {
                                               Ack = Statistics.TotalAck,
                                               Delivery = Statistics.TotalDelivered,
                                               Error = Statistics.TotalErrors,
                                               Nack = Statistics.TotalNack,
                                               Pending = Statistics.AckPendingMsgs,
                                               Processing = Statistics.ProcessingMsgs,
                                               Received = Statistics.TotalReceived,
                                               Sent = Statistics.TotalSent,
                                               Stored = Statistics.StoredMsgs,
                                               StoredPrio = Statistics.StoredPrioMsgs,
                                               Timeout = Statistics.TotalTimedout
                                           };

                lock (_graphData)
                {
                    _graphData.Enqueue(graphData);
                    if (_graphData.Count >= GRAPH_DATA_SIZE)
                        _graphData.Dequeue();
                }

                if (_lastInformationRefreshDate + _informationRefreshment < DateTime.UtcNow)
                {
                    Information = HorseQueueInformation.Create(Queue);
                    _lastInformationRefreshDate = DateTime.UtcNow;
                }
            }
            catch
            {
            }
        }
    }
}
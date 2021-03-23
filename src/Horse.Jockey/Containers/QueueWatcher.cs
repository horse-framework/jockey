using System;
using System.Collections.Generic;
using System.Threading;
using Horse.Jockey.Models;
using Horse.Mq.Queues;

namespace Horse.Jockey.Containers
{
    public class QueueWatcher
    {
        public HorseQueue Queue { get; }

        public HorseQueueStatistics Statistics { get; private set; }
        public HorseQueueInformation Information { get; private set; }

        private DateTime _lastInformationRefreshDate = DateTime.UtcNow.AddDays(-1);
        private readonly TimeSpan _informationRefreshment = TimeSpan.FromSeconds(60);
        private Timer _timer;

        //last 5 mins
        private Queue<QueueGraphData> _graphData = new(300);

        public QueueWatcher(HorseQueue queue)
        {
            Queue = queue;
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

        private void Refresh()
        {
            RefreshStats();

            if (_lastInformationRefreshDate + _informationRefreshment < DateTime.UtcNow)
            {
                RefreshInfo();
                _lastInformationRefreshDate = DateTime.UtcNow;
            }
        }

        private void RefreshStats()
        {
            //todo: refresh stats
        }

        private void RefreshInfo()
        {
            //todo: refresh info
        }
    }
}
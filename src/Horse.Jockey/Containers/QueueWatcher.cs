using System;
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

        private Timer _timer;

        public QueueWatcher(HorseQueue queue)
        {
            Queue = queue;
        }

        public void Watch()
        {
            if (_timer != null)
                return;

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
            throw new NotImplementedException();
        }
    }
}
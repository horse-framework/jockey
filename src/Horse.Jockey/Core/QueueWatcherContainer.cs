using System.Collections.Generic;
using System.Linq;
using Horse.Mq;
using Horse.Mq.Queues;

namespace Horse.Jockey.Core
{
    internal class QueueWatcherContainer
    {
        private JockeyOptions _options;
        private readonly Dictionary<string, QueueWatcher> _queueWatchers = new();

        private List<QueueWatcher> _watchers = new();
        public IEnumerable<QueueWatcher> QueueWatchers => _watchers;

        public void Initialize(HorseMq mq, JockeyOptions options)
        {
            _options = options;
        }

        public QueueWatcher Watch(HorseQueue queue)
        {
            QueueWatcher watcher = new QueueWatcher(queue, _options);
            queue.OnDestroyed += _ => Release(watcher);
            watcher.Watch();

            lock (_queueWatchers)
                _queueWatchers.Add(queue.Name, watcher);

            _watchers = _queueWatchers.Values.ToList();

            return watcher;
        }

        public void Release(QueueWatcher watcher)
        {
            watcher.Destroy();

            lock (_queueWatchers)
                _queueWatchers.Remove(watcher.Queue.Name);

            _watchers = _queueWatchers.Values.ToList();
        }

        public QueueWatcher Get(string queueName)
        {
            QueueWatcher watcher;
            lock (_queueWatchers)
                _queueWatchers.TryGetValue(queueName, out watcher);

            return watcher;
        }

        public IEnumerable<QueueWatcher> GetAll()
        {
            List<QueueWatcher> watchers;
            
            lock (_queueWatchers)
                watchers = new List<QueueWatcher>(_queueWatchers.Select(x => x.Value));

            return watchers;
        }
    }
}
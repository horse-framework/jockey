using System.Threading.Tasks;
using Horse.Jockey.Core;
using Horse.Messaging.Server;
using Horse.Messaging.Server.Clients;
using Horse.Messaging.Server.Queues;

namespace Horse.Jockey.Handlers
{
    internal class QueueEventHandler : BaseHandler, IQueueEventHandler
    {
        private readonly MessageCounter _counter;

        public QueueEventHandler(MessageCounter counter)
        {
            _counter = counter;
        }

        public Task OnCreated(HorseQueue queue)
        {
            _counter.AddQueueCounter(queue.Name);
            return Task.CompletedTask;
        }

        public Task OnRemoved(HorseQueue queue)
        {
            _counter.RemoveQueueCounter(queue.Name);
            return Task.CompletedTask;
        }

        public Task OnConsumerSubscribed(QueueClient client)
        {
            return Task.CompletedTask;
        }

        public Task OnConsumerUnsubscribed(QueueClient client)
        {
            return Task.CompletedTask;
        }

        public Task OnStatusChanged(HorseQueue queue, QueueStatus from, QueueStatus to)
        {
            return Task.CompletedTask;
        }
    }
}
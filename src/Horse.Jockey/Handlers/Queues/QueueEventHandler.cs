using System.Threading.Tasks;
using Horse.Mq;
using Horse.Mq.Clients;
using Horse.Mq.Queues;

namespace Horse.Jockey.Handlers.Queues
{
    internal class QueueEventHandler : BaseHandler, IQueueEventHandler
    {
        public Task OnCreated(HorseQueue queue)
        {
            return Task.CompletedTask;
        }

        public Task OnRemoved(HorseQueue queue)
        {
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

        public Task OnStatusChanged(HorseQueue queue, QueueStatus @from, QueueStatus to)
        {
            return Task.CompletedTask;
        }
    }
}
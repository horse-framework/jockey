using System.Threading.Tasks;
using Horse.Mq;
using Horse.Mq.Clients;
using Horse.Mq.Queues;

namespace Horse.Jockey.Handlers
{
    public class QueueEventHandler : IQueueEventHandler
    {
        public async Task OnCreated(HorseQueue queue)
        {
            throw new System.NotImplementedException();
        }

        public async Task OnRemoved(HorseQueue queue)
        {
            throw new System.NotImplementedException();
        }

        public async Task OnConsumerSubscribed(QueueClient client)
        {
            throw new System.NotImplementedException();
        }

        public async Task OnConsumerUnsubscribed(QueueClient client)
        {
            throw new System.NotImplementedException();
        }

        public async Task OnStatusChanged(HorseQueue queue, QueueStatus @from, QueueStatus to)
        {
            throw new System.NotImplementedException();
        }
    }
}
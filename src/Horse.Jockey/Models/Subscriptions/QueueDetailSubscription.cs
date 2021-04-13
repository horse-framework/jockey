using Horse.Mq.Queues;
using Horse.Protocols.WebSocket;

namespace Horse.Jockey.Models.Subscriptions
{
    internal class QueueDetailSubscription
    {
        public WsServerSocket Client { get; set; }
        public HorseQueue Queue { get; set; }
    }
}
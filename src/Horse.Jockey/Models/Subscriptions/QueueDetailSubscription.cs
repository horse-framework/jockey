using Horse.Messaging.Server.Queues;
using Horse.WebSocket.Protocol;

namespace Horse.Jockey.Models.Subscriptions
{
    internal class QueueDetailSubscription
    {
        public WsServerSocket Client { get; init; }
        public HorseQueue Queue { get; init; }
        public string Resolution { get; set; } = "1m";
    }
}
using Horse.WebSocket.Models;

namespace Horse.Jockey.Models
{
    [ModelType("msg-stats")]
    public class MessageStatistics
    {
        public int Routes { get; set; }
        public int Queues { get; set; }
        public int QueueMessages { get; set; }
        public int QueueSubscribers { get; set; }
        public int PublishedMessages { get; set; }
        public int DeliveredMessages { get; set; }
        public int AckMessages { get; set; }
        public int UnackMessages { get; set; }
    }
}
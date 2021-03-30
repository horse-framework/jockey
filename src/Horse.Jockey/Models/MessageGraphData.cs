using Horse.WebSocket.Models;

namespace Horse.Jockey.Models
{
    [ModelType("msg-graph-data")]
    public class MessageGraphData
    {
        public long DirectMessage { get; set; }
        public long DirectResponse { get; set; }
        public long DirectReceiverNotFound { get; set; }
        public long DirectDelivery { get; set; }
        public long RouterPublish { get; set; }
        public long RouterNotFound { get; set; }
    }
}
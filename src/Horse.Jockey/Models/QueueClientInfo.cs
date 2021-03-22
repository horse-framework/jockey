using System.Text.Json.Serialization;
using Horse.WebSocket.Models;

namespace Horse.Jockey.Models
{
    [ModelType("queue-client")]
    public class QueueClientInfo : ClientInfo
    {
        [JsonPropertyName("subscriptionDate")]
        public long SubscriptionDate { get; set; }

        [JsonPropertyName("processingMsg")]
        public MessageInfo ProcessingMsg { get; set; }
        
        [JsonPropertyName("processDeadline")]
        public long ProcessDeadline { get; set; }
    }
}
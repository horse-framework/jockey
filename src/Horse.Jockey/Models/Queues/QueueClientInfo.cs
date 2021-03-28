using System.Text.Json.Serialization;
using Horse.Jockey.Models.Clients;
using Horse.WebSocket.Models;
using Newtonsoft.Json;

namespace Horse.Jockey.Models.Queues
{
    [ModelType("queue-client")]
    public class QueueClientInfo : ClientInfo
    {
        [JsonProperty("subsDate")]
        [JsonPropertyName("subsDate")]
        public long SubscriptionDate { get; set; }

        [JsonProperty("processingMsg")]
        [JsonPropertyName("processingMsg")]
        public MessageInfo ProcessingMsg { get; set; }
        
        [JsonProperty("processDeadline")]
        [JsonPropertyName("processDeadline")]
        public long ProcessDeadline { get; set; }
    }
}
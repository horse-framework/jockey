using System.Text.Json.Serialization;
using Horse.WebSocket.Models;

namespace Horse.Jockey.Models
{
    [ModelType("msg-info")]
    public class MessageInfo
    {
        [JsonPropertyName("id")]
        public string Id { get; set; }

        [JsonPropertyName("size")]
        public long Size { get; set; }

        [JsonPropertyName("created")]
        public long Created { get; set; }

        [JsonPropertyName("deadline")]
        public long? Deadline { get; set; }

        [JsonPropertyName("source")]
        public string Source { get; set; }

        [JsonPropertyName("isSaved")]
        public bool IsSaved { get; set; }

        [JsonPropertyName("isProducerAckSent")]
        public bool IsProducerAckSent { get; set; }

        [JsonPropertyName("isSent")]
        public bool IsSent { get; set; }

        [JsonPropertyName("sentCount")]
        public int SentCount { get; set; }

        [JsonPropertyName("isTimedOut")]
        public bool IsTimedOut { get; set; }

        [JsonPropertyName("deliveryCount")]
        public int DeliveryCount { get; set; }
    }
}
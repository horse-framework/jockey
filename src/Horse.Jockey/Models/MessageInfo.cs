using System.Text.Json.Serialization;
using Horse.WebSocket.Models;
using Newtonsoft.Json;

namespace Horse.Jockey.Models
{
    [ModelType("msg-info")]
    public class MessageInfo
    {
        [JsonProperty("id")]
        [JsonPropertyName("id")]
        public string Id { get; set; }

        [JsonProperty("size")]
        [JsonPropertyName("size")]
        public long Size { get; set; }

        [JsonProperty("created")]
        [JsonPropertyName("created")]
        public long Created { get; set; }

        [JsonProperty("deadline")]
        [JsonPropertyName("deadline")]
        public long? Deadline { get; set; }

        [JsonProperty("source")]
        [JsonPropertyName("source")]
        public string Source { get; set; }

        [JsonProperty("isSaved")]
        [JsonPropertyName("isSaved")]
        public bool IsSaved { get; set; }

        [JsonProperty("isProducerAckSent")]
        [JsonPropertyName("isProducerAckSent")]
        public bool IsProducerAckSent { get; set; }

        [JsonProperty("isSent")]
        [JsonPropertyName("isSent")]
        public bool IsSent { get; set; }

        [JsonProperty("sentCount")]
        [JsonPropertyName("sentCount")]
        public int SentCount { get; set; }

        [JsonProperty("isTimedOut")]
        [JsonPropertyName("isTimedOut")]
        public bool IsTimedOut { get; set; }

        [JsonProperty("deliveryCount")]
        [JsonPropertyName("deliveryCount")]
        public int DeliveryCount { get; set; }
    }
}
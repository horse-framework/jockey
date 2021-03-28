using System.Text.Json.Serialization;
using Horse.WebSocket.Models;
using Newtonsoft.Json;

namespace Horse.Jockey.Models.Queues
{
    [ModelType("queue-graph-data")]
    public class QueueGraphData
    {
        [JsonProperty("date")]
        [JsonPropertyName("date")]
        public long Date { get; set; }

        [JsonProperty("stored")]
        [JsonPropertyName("stored")]
        public long Stored { get; set; }

        [JsonProperty("storedPrio")]
        [JsonPropertyName("storedPrio")]
        public long StoredPrio { get; set; }

        [JsonProperty("received")]
        [JsonPropertyName("received")]
        public long Received { get; set; }

        [JsonProperty("sent")]
        [JsonPropertyName("sent")]
        public long Sent { get; set; }

        [JsonProperty("delivery")]
        [JsonPropertyName("delivery")]
        public long Delivery { get; set; }

        [JsonProperty("ack")]
        [JsonPropertyName("ack")]
        public long Ack { get; set; }

        [JsonProperty("unack")]
        [JsonPropertyName("unack")]
        public long Unack { get; set; }

        [JsonProperty("nack")]
        [JsonPropertyName("nack")]
        public long Nack { get; set; }

        [JsonProperty("timeout")]
        [JsonPropertyName("timeout")]
        public long Timeout { get; set; }

        [JsonProperty("processing")]
        [JsonPropertyName("processing")]
        public long Processing { get; set; }

        [JsonProperty("pending")]
        [JsonPropertyName("pending")]
        public long Pending { get; set; }

        [JsonProperty("error")]
        [JsonPropertyName("error")]
        public long Error { get; set; }
    }
}
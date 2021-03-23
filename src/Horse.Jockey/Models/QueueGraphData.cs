using System.Text.Json.Serialization;
using Horse.WebSocket.Models;

namespace Horse.Jockey.Models
{
    [ModelType("graph-data")]
    public class QueueGraphData
    {
        [JsonPropertyName("stored")]
        public long Stored { get; set; }

        [JsonPropertyName("storedPrio")]
        public long StoredPrio { get; set; }

        [JsonPropertyName("received")]
        public long Received { get; set; }

        [JsonPropertyName("sent")]
        public long Sent { get; set; }

        [JsonPropertyName("delivery")]
        public long Delivery { get; set; }

        [JsonPropertyName("ack")]
        public long Ack { get; set; }

        [JsonPropertyName("nack")]
        public long Nack { get; set; }

        [JsonPropertyName("timeout")]
        public long Timeout { get; set; }

        [JsonPropertyName("processing")]
        public long Processing { get; set; }

        [JsonPropertyName("pending")]
        public long Pending { get; set; }

        [JsonPropertyName("error")]
        public long Error { get; set; }
    }
}
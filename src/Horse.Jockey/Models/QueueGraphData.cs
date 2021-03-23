using System.Text.Json.Serialization;
using Horse.WebSocket.Models;

namespace Horse.Jockey.Models
{
    [ModelType("graph-data")]
    public class QueueGraphData
    {
        [JsonPropertyName("stored")]
        public int Stored { get; set; }

        [JsonPropertyName("storedPrio")]
        public int StoredPrio { get; set; }

        [JsonPropertyName("received")]
        public int Received { get; set; }

        [JsonPropertyName("sent")]
        public int Sent { get; set; }

        [JsonPropertyName("delivery")]
        public int Delivery { get; set; }

        [JsonPropertyName("ack")]
        public int Ack { get; set; }

        [JsonPropertyName("nack")]
        public int Nack { get; set; }

        [JsonPropertyName("timeout")]
        public int Timeout { get; set; }

        [JsonPropertyName("processing")]
        public int Processing { get; set; }

        [JsonPropertyName("pending")]
        public int Pending { get; set; }

        [JsonPropertyName("error")]
        public int Error { get; set; }
        
        [JsonPropertyName("redelivered")]
        public int Redelivered { get; set; }
    }
}
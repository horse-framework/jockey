using System.Text.Json.Serialization;
using Horse.WebSocket.Protocol;
using Newtonsoft.Json;

namespace Horse.Jockey.Models.Queues
{
    [ModelType("queue-store")]
    internal class QueueStoreData
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

        [JsonProperty("processing")]
        [JsonPropertyName("processing")]
        public long Processing { get; set; }

        [JsonProperty("puttingBack")]
        [JsonPropertyName("puttingBack")]
        public int PuttingBack { get; set; }

        [JsonProperty("pending")]
        [JsonPropertyName("pending")]
        public long Pending { get; set; }
    }
}
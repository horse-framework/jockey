using System.Text.Json.Serialization;
using Horse.WebSocket.Models;
using Newtonsoft.Json;

namespace Horse.Jockey.Models.Queues
{
    [ModelType("queue-detail")]
    public class QueueDetail
    {
        [JsonProperty("info")]
        [JsonPropertyName("info")]
        public HorseQueueInformation Info { get; set; }

        [JsonProperty("stats")]
        [JsonPropertyName("stats")]
        public HorseQueueStatistics Stats { get; set; }

        [JsonProperty("graph")]
        [JsonPropertyName("graph")]
        public QueueGraphData[] GraphData { get; set; }
    }
}
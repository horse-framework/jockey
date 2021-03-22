using System.Text.Json.Serialization;
using Horse.WebSocket.Models;

namespace Horse.Jockey.Models
{
    [ModelType("queue-detail")]
    public class QueueDetail
    {
        [JsonPropertyName("info")]
        public HorseQueueInformation Info { get; set; }

        [JsonPropertyName("stats")]
        public HorseQueueStatistics Stats { get; set; }
    }
}
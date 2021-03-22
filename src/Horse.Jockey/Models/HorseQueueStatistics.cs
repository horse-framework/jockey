using System.Text.Json.Serialization;
using Horse.WebSocket.Models;

namespace Horse.Jockey.Models
{
    [ModelType("queue-stats")]
    public class HorseQueueStatistics
    {
        [JsonPropertyName("name")]
        public string Name { get; set; }

        [JsonPropertyName("consumers")]
        public int Consumers { get; set; }

        [JsonPropertyName("storedMsg")]
        public int StoredMsgs { get; set; }

        [JsonPropertyName("storedPrioMsgs")]
        public int StoredPrioMsgs { get; set; }

        [JsonPropertyName("processingMsgs")]
        public int ProcessingMsgs { get; set; }

        [JsonPropertyName("ackPendingMsgs")]
        public int AckPendingMsgs { get; set; }

        [JsonPropertyName("lastReceived")]
        public long LastReceived { get; set; }

        [JsonPropertyName("lastSent")]
        public long LastSent { get; set; }

        [JsonPropertyName("totalReceived")]
        public long TotalReceived { get; set; }

        [JsonPropertyName("totalSent")]
        public long TotalSent { get; set; }

        [JsonPropertyName("totalAcks")]
        public long TotalAcks { get; set; }

        [JsonPropertyName("totalNacks")]
        public long TotalNacks { get; set; }

        [JsonPropertyName("totalTimedouts")]
        public long TotalTimedouts { get; set; }

        [JsonPropertyName("totalErrors")]
        public long TotalErrors { get; set; }
    }
}
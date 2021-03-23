using System.Text.Json.Serialization;
using Horse.Jockey.Helpers;
using Horse.Mq.Queues;
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
        public long StoredMsgs { get; set; }

        [JsonPropertyName("storedPrioMsgs")]
        public long StoredPrioMsgs { get; set; }

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

        [JsonPropertyName("totalDelivered")]
        public long TotalDelivered { get; set; }

        [JsonPropertyName("totalAck")]
        public long TotalAck { get; set; }

        [JsonPropertyName("totalNack")]
        public long TotalNack { get; set; }

        [JsonPropertyName("totalTimedout")]
        public long TotalTimedout { get; set; }

        [JsonPropertyName("totalErrors")]
        public long TotalErrors { get; set; }

        public static HorseQueueStatistics Create(HorseQueue queue)
        {
            return new()
                   {
                       Consumers = queue.ClientsCount(),
                       Name = queue.Name,
                       LastReceived = queue.Info.LastMessageReceiveDate.ToUnixSeconds(),
                       LastSent = queue.Info.LastMessageSendDate.ToUnixSeconds(),
                       StoredMsgs = queue.Info.InQueueRegularMessages,
                       StoredPrioMsgs = queue.Info.InQueueHighPriorityMessages,
                       ProcessingMsgs = queue.ProcessingMessage != null ? 1 : 0,
                       AckPendingMsgs = queue.GetAckPendingMessageCount(),
                       TotalAck = queue.Info.Acknowledges,
                       TotalErrors = queue.Info.ErrorCount,
                       TotalNack = queue.Info.NegativeAcknowledge,
                       TotalReceived = queue.Info.ReceivedMessages,
                       TotalSent = queue.Info.SentMessages,
                       TotalTimedout = queue.Info.TimedOutMessages,
                       TotalDelivered = queue.Info.Deliveries
                   };
        }
    }
}
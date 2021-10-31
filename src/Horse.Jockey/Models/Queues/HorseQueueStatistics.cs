using System.Linq;
using System.Text.Json.Serialization;
using Horse.Jockey.Helpers;
using Horse.Messaging.Server.Queues;
using Horse.WebSocket.Models;
using Newtonsoft.Json;

namespace Horse.Jockey.Models.Queues
{
	[ModelType("queue-stats")]
	internal class HorseQueueStatistics
	{
		[JsonProperty("name")]
		[JsonPropertyName("name")]
		public string Name { get; set; }

		[JsonProperty("consumers")]
		[JsonPropertyName("consumers")]
		public int Consumers { get; set; }

		[JsonProperty("storedMsgs")]
		[JsonPropertyName("storedMsgs")]
		public long StoredMsgs { get; set; }

		[JsonProperty("storedPrioMsgs")]
		[JsonPropertyName("storedPrioMsgs")]
		public long StoredPrioMsgs { get; set; }

		[JsonProperty("processingMsgs")]
		[JsonPropertyName("processingMsgs")]
		public int ProcessingMsgs { get; set; }

		[JsonProperty("ackPendingMsgs")]
		[JsonPropertyName("ackPendingMsgs")]
		public int AckPendingMsgs { get; set; }

		[JsonProperty("lastReceived")]
		[JsonPropertyName("lastReceived")]
		public long LastReceived { get; set; }

		[JsonProperty("lastSent")]
		[JsonPropertyName("lastSent")]
		public long LastSent { get; set; }

		[JsonProperty("totalReceived")]
		[JsonPropertyName("totalReceived")]
		public long TotalReceived { get; set; }

		[JsonProperty("totalSent")]
		[JsonPropertyName("totalSent")]
		public long TotalSent { get; set; }

		[JsonProperty("totalDelivered")]
		[JsonPropertyName("totalDelivered")]
		public long TotalDelivered { get; set; }

		[JsonProperty("totalAck")]
		[JsonPropertyName("totalAck")]
		public long TotalAck { get; set; }

		[JsonProperty("totalNack")]
		[JsonPropertyName("totalNack")]
		public long TotalNack { get; set; }

		[JsonProperty("totalUnack")]
		[JsonPropertyName("totalUnack")]
		public long TotalUnack { get; set; }

		[JsonProperty("totalTimedout")]
		[JsonPropertyName("totalTimedout")]
		public long TotalTimedout { get; set; }

		[JsonProperty("totalErrors")]
		[JsonPropertyName("totalErrors")]
		public long TotalErrors { get; set; }

		public static HorseQueueStatistics Create(HorseQueue queue)
		{
			int processingMessages = 0;

			if (queue.Type == QueueType.RoundRobin)
				processingMessages = queue.ClientsClone.Count(x => x.CurrentlyProcessing != null);
			else if (queue.ProcessingMessage != null)
				processingMessages++;

			HorseQueueStatistics stats = new()
			{
				Consumers = queue.ClientsCount(),
				Name = queue.Name,
				LastReceived = queue.Info.LastMessageReceiveDate.ToUnixSeconds(),
				LastSent = queue.Info.LastMessageSendDate.ToUnixSeconds(),
				StoredMsgs = queue.Manager.MessageStore.Count(),
				StoredPrioMsgs = queue.Manager.PriorityMessageStore.Count(),
				ProcessingMsgs = processingMessages,
				AckPendingMsgs = queue.Manager.DeliveryHandler.Tracker.GetDeliveryCount(),
				TotalAck = queue.Info.Acknowledges,
				TotalNack = queue.Info.NegativeAcknowledge,
				TotalUnack = queue.Info.Unacknowledges,
				TotalErrors = queue.Info.ErrorCount,
				TotalReceived = queue.Info.ReceivedMessages,
				TotalSent = queue.Info.SentMessages,
				TotalTimedout = queue.Info.TimedOutMessages,
				TotalDelivered = queue.Info.Deliveries
			};

			if (queue.ProcessingMessage != null)
			{
				if (queue.ProcessingMessage.Message.HighPriority)
					stats.StoredPrioMsgs++;
				else
					stats.StoredMsgs++;
			}

			return stats;
		}
	}
}
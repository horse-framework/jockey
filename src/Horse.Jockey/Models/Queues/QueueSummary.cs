using System.Text.Json.Serialization;
using Horse.Jockey.Helpers;
using Horse.Messaging.Server.Queues;
using Horse.WebSocket.Models;
using Newtonsoft.Json;

namespace Horse.Jockey.Models.Queues
{
	[ModelType("queue-summary")]
	internal class QueueSummary
	{
		[JsonProperty("name")]
		[JsonPropertyName("name")]
		public string Name { get; set; }

		[JsonProperty("topic")]
		[JsonPropertyName("topic")]
		public string Topic { get; set; }

		[JsonProperty("createdDate")]
		[JsonPropertyName("createdDate")]
		public long CreatedDate { get; set; }

		[JsonProperty("status")]
		[JsonPropertyName("status")]
		public string Type { get; set; }

		[JsonProperty("handler")]
		[JsonPropertyName("handler")]
		public string Handler { get; set; }

		[JsonProperty("acknowledge")]
		[JsonPropertyName("acknowledge")]
		public string Acknowledge { get; set; }

		[JsonProperty("consumers")]
		[JsonPropertyName("consumers")]
		public int Consumers { get; set; }

		[JsonProperty("storedMsg")]
		[JsonPropertyName("storedMsg")]
		public long StoredMsgs { get; set; }

		[JsonProperty("storedPrioMsgs")]
		[JsonPropertyName("storedPrioMsgs")]
		public long StoredPrioMsgs { get; set; }

		public static QueueSummary Create(HorseQueue queue)
		{
			return new QueueSummary
			{
				Name = queue.Name,
				Topic = queue.Topic,
				CreatedDate = queue.Info.CreatedDate.ToUnixSeconds(),
				Type = queue.Type.ToString(),
				Handler = queue.DeliveryHandler.ToHandlerString(),
				Acknowledge = queue.Options.Acknowledge.ToString(),
				Consumers = queue.ClientsCount(),
				StoredMsgs = queue.MessageCount(),
				StoredPrioMsgs = queue.PriorityMessageCount()
			};
		}
	}
}
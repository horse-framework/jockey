using System.Text.Json.Serialization;
using Horse.Jockey.Helpers;
using Horse.Mq.Queues;
using Horse.WebSocket.Models;

namespace Horse.Jockey.Models
{
    [ModelType("queue-summary")]
    public class QueueSummary
    {
        [JsonPropertyName("name")]
        public string Name { get; set; }

        [JsonPropertyName("topic")]
        public string Topic { get; set; }

        [JsonPropertyName("createdDate")]
        public long CreatedDate { get; set; }

        [JsonPropertyName("status")]
        public string Status { get; set; }

        [JsonPropertyName("handler")]
        public string Handler { get; set; }

        [JsonPropertyName("acknowledge")]
        public string Acknowledge { get; set; }

        [JsonPropertyName("consumers")]
        public int Consumers { get; set; }

        [JsonPropertyName("storedMsg")]
        public long StoredMsgs { get; set; }

        [JsonPropertyName("storedPrioMsgs")]
        public long StoredPrioMsgs { get; set; }

        public static QueueSummary Create(HorseQueue queue)
        {
            return new()
                   {
                       Name = queue.Name,
                       Topic = queue.Topic,
                       CreatedDate = queue.Info.CreatedDate.ToUnixSeconds(),
                       Status = queue.Status.ToString(),
                       Handler = queue.DeliveryHandler.ToHandlerString(),
                       Acknowledge = queue.Options.Acknowledge.ToString(),
                       Consumers = queue.ClientsCount(),
                       StoredMsgs = queue.MessageCount(),
                       StoredPrioMsgs = queue.PriorityMessageCount()
                   };
        }
    }
}
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using Horse.Jockey.Helpers;
using Horse.Messaging.Server.Queues;
using Newtonsoft.Json;

namespace Horse.Jockey.Models.Queues
{
    public class QueueHeaderModel
    {
        [JsonProperty("name")]
        [JsonPropertyName("name")]
        public string Name { get; }

        [JsonProperty("value")]
        [JsonPropertyName("value")]
        public string Value { get; }

        public QueueHeaderModel(string name, string value)
        {
            Name = name;
            Value = value;
        }
    }

    public class QueueMessageModel
    {
        [JsonProperty("id")]
        [JsonPropertyName("id")]
        public string Id { get; }

        [JsonProperty("source")]
        [JsonPropertyName("source")]
        public string Source { get; }

        [JsonProperty("contentType")]
        [JsonPropertyName("contentType")]
        public int ContentType { get; }

        [JsonProperty("priority")]
        [JsonPropertyName("priority")]
        public bool HighPriority { get; }

        [JsonProperty("message")]
        [JsonPropertyName("message")]
        public string Message { get; }

        [JsonProperty("headers")]
        [JsonPropertyName("headers")]
        public List<QueueHeaderModel> Headers { get; }

        [JsonProperty("createdDate")]
        [JsonPropertyName("createdDate")]
        public long CreatedDate { get; set; }

        [JsonProperty("deadline")]
        [JsonPropertyName("deadline")]
        public long Deadline { get; set; }

        [JsonProperty("isSaved")]
        [JsonPropertyName("isSaved")]
        public bool IsSaved { get; set; }

        [JsonProperty("sendCount")]
        [JsonPropertyName("sendCount")]
        public int SendCount { get; set; }

        [JsonProperty("deliveryCount")]
        [JsonPropertyName("deliveryCount")]
        public int DeliveryCount { get; set; }

        public QueueMessageModel(QueueMessage message)
        {
            Id = message.Message.MessageId;
            Source = message.Message.Source;
            ContentType = message.Message.ContentType;
            HighPriority = message.Message.HighPriority;
            Message = message.Message.GetStringContent();
            Headers = message.Message.Headers == null
                ? new List<QueueHeaderModel>()
                : message.Message.Headers
                    .Select(x => new QueueHeaderModel(x.Key, x.Value))
                    .ToList();

            CreatedDate = message.CreatedDate.ToUnixSeconds();
            if (message.Deadline.HasValue)
                Deadline = message.Deadline.Value.ToUnixSeconds();

            IsSaved = message.IsSaved;
            SendCount = message.SendCount;
            DeliveryCount = message.DeliveryCount;
        }
    }
}
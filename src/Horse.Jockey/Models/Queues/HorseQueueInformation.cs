using System.Text.Json.Serialization;
using Horse.Jockey.Helpers;
using Horse.Messaging.Server.Queues;
using Horse.WebSocket.Models;
using Newtonsoft.Json;

namespace Horse.Jockey.Models.Queues
{
    [ModelType("queue-info")]
    internal class HorseQueueInformation
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

        [JsonProperty("type")]
        [JsonPropertyName("type")]
        public string Type { get; set; }

        [JsonProperty("manager")]
        [JsonPropertyName("manager")]
        public string Manager { get; set; }

        [JsonProperty("acknowledge")]
        [JsonPropertyName("acknowledge")]
        public string Acknowledge { get; set; }

        [JsonProperty("ackTimeout")]
        [JsonPropertyName("ackTimeout")]
        public long AckTimeout { get; set; }

        [JsonProperty("msgTimeout")]
        [JsonPropertyName("msgTimeout")]
        public long MsgTimeout { get; set; }

        [JsonProperty("messageLimit")]
        [JsonPropertyName("messageLimit")]
        public int MessageLimit { get; set; }

        [JsonProperty("messageSizeLimit")]
        [JsonPropertyName("messageSizeLimit")]
        public ulong MessageSizeLimit { get; set; }

        [JsonProperty("delayBetweenMessages")]
        [JsonPropertyName("delayBetweenMessages")]
        public int DelayBetweenMessages { get; set; }

        [JsonProperty("putBackDelay")]
        [JsonPropertyName("putBackDelay")]
        public int PutBackDelay { get; set; }

        [JsonProperty("autoDestroy")]
        [JsonPropertyName("autoDestroy")]
        public string AutoDestroy { get; set; }

        [JsonProperty("autoQueueCreation")]
        [JsonPropertyName("autoQueueCreation")]
        public string AutoQueueCreation { get; set; }

        public static HorseQueueInformation Create(HorseQueue queue)
        {
            return new()
            {
                Acknowledge = queue.Options.Acknowledge.ToString(),
                Manager = queue.Manager == null ? "(Not Initialized)" : queue.Manager.GetType().Name,
                Name = queue.Name,
                Type = queue.Type.ToString(),
                Topic = queue.Topic,
                AckTimeout = queue.Options.AcknowledgeTimeout.ToMilliseconds(),
                AutoDestroy = queue.Options.AutoDestroy.ToString(),
                AutoQueueCreation = queue.Options.AutoQueueCreation.ToString(),
                CreatedDate = queue.Info.CreatedDate.ToUnixSeconds(),
                MessageLimit = queue.Options.MessageLimit,
                MsgTimeout = queue.Options.MessageTimeout.ToMilliseconds(),
                DelayBetweenMessages = queue.Options.DelayBetweenMessages,
                MessageSizeLimit = queue.Options.MessageSizeLimit,
                PutBackDelay = queue.Options.PutBackDelay,
            };
        }
    }
}
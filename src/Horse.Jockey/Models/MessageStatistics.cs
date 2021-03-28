using System;
using System.Text.Json.Serialization;
using Horse.Mq;
using Horse.WebSocket.Models;
using Newtonsoft.Json;

namespace Horse.Jockey.Models
{
    [ModelType("msg-stats")]
    public class MessageStatistics
    {
        [JsonProperty("routers")]
        [JsonPropertyName("routers")]
        public int Routers { get; set; }

        [JsonProperty("queues")]
        [JsonPropertyName("queues")]
        public int Queues { get; set; }

        [JsonProperty("queueMsgs")]
        [JsonPropertyName("queueMsgs")]
        public int QueueMessages { get; set; }

        [JsonProperty("queueSubs")]
        [JsonPropertyName("queueSubs")]
        public int QueueSubscribers { get; set; }

        [JsonProperty("publishedMsgs")]
        [JsonPropertyName("publishedMsgs")]
        public int PublishedMessages { get; set; }

        [JsonProperty("deliveredMsgs")]
        [JsonPropertyName("deliveredMsgs")]
        public int DeliveredMessages { get; set; }

        [JsonProperty("ackMsgs")]
        [JsonPropertyName("ackMsgs")]
        public int AckMessages { get; set; }

        [JsonProperty("nackMsgs")]
        [JsonPropertyName("nackMsgs")]
        public int NackMessages { get; set; }

        [JsonProperty("unackMsgs")]
        [JsonPropertyName("unackMsgs")]
        public int UnackMessages { get; set; }

        public static MessageStatistics Create(HorseMq mq)
        {
            throw new NotImplementedException();
        }
    }
}
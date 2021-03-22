using System.Text.Json.Serialization;
using Horse.WebSocket.Models;

namespace Horse.Jockey.Models
{
    [ModelType("queue-info")]
    public class HorseQueueInformation
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

        [JsonPropertyName("ackTimeout")]
        public long AckTimeout { get; set; }

        [JsonPropertyName("msgTimeout")]
        public long MsgTimeout { get; set; }

        [JsonPropertyName("useMessageId")]
        public bool UseMessageId { get; set; }

        [JsonPropertyName("hideClientNames")]
        public bool HideClientNames { get; set; }

        [JsonPropertyName("messageLimit")]
        public int MessageLimit { get; set; }

        [JsonPropertyName("messageSizeLimit")]
        public int MessageSizeLimit { get; set; }

        [JsonPropertyName("delayBetweenMessages")]
        public int DelayBetweenMessages { get; set; }

        [JsonPropertyName("putBackDelay")]
        public int PutBackDelay { get; set; }

        [JsonPropertyName("autoDestroy")]
        public string AutoDestroy { get; set; }
    }
}
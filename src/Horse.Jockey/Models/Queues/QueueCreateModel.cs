using System.Text.Json.Serialization;
using Newtonsoft.Json;

namespace Horse.Jockey.Models.Queues
{
    public class QueueCreateModel
    {
        [JsonProperty("name")]
        [JsonPropertyName("name")]
        public string Name { get; set; }

        [JsonProperty("manager")]
        [JsonPropertyName("manager")]
        public string Manager { get; set; }

        [JsonProperty("commit")]
        [JsonPropertyName("commit")]
        public string CommitWhen { get; set; }

        [JsonProperty("ack")]
        [JsonPropertyName("ack")]
        public string Acknowledge { get; set; }

        [JsonProperty("ackTimeout")]
        [JsonPropertyName("ackTimeout")]
        public int? AcknowledgeTimeout { get; set; }

        [JsonProperty("type")]
        [JsonPropertyName("type")]
        public string Type { get; set; }

        [JsonProperty("autoDestroy")]
        [JsonPropertyName("autoDestroy")]
        public string AutoDestroy { get; set; }

        [JsonProperty("putBack")]
        [JsonPropertyName("putBack")]
        public string PutBack { get; set; }

        [JsonProperty("putBackDelay")]
        [JsonPropertyName("putBackDelay")]
        public int? PutBackDelay { get; set; }

        [JsonProperty("delay")]
        [JsonPropertyName("delay")]
        public int? DelayBetweenMessages { get; set; }

        [JsonProperty("clientLimit")]
        [JsonPropertyName("clientLimit")]
        public int? ClientLimit { get; set; }

        [JsonProperty("msgLimit")]
        [JsonPropertyName("msgLimit")]
        public int? MessageLimit { get; set; }

        [JsonProperty("msgTimeout")]
        [JsonPropertyName("msgTimeout")]
        public MessageTimeoutModel MessageTimeout { get; set; }

        [JsonProperty("msgSizeLimit")]
        [JsonPropertyName("msgSizeLimit")]
        public ulong? MessageSizeLimit { get; set; }
    }
}
using System.Text.Json.Serialization;
using Newtonsoft.Json;

namespace Horse.Jockey.Models.Queues
{
    public class QueueOptionChange
    {
        [JsonProperty("queue")]
        [JsonPropertyName("queue")]
        public string Queue { get; set; }

        [JsonProperty("name")]
        [JsonPropertyName("name")]
        public string Name { get; set; }

        [JsonProperty("value")]
        [JsonPropertyName("value")]
        public string Value { get; set; }
    }
}
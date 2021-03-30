using System.Text.Json.Serialization;
using Newtonsoft.Json;

namespace Horse.Jockey.Models
{
    internal class BindingInfo
    {
        [JsonProperty("name")]
        [JsonPropertyName("name")]
        public string Name { get; set; }

        [JsonProperty("interaction")]
        [JsonPropertyName("interaction")]
        public string Interaction { get; set; }

        [JsonProperty("target")]
        [JsonPropertyName("target")]
        public string Target { get; set; }

        [JsonProperty("priority")]
        [JsonPropertyName("priority")]
        public int Priority { get; set; }

        [JsonProperty("contentType")]
        [JsonPropertyName("contentType")]
        public ushort? ContentType { get; set; }
    }
}
using System.Text.Json.Serialization;
using Newtonsoft.Json;

namespace Horse.Jockey.Models.Routers
{
    public class AddBindingModel
    {
        [JsonProperty("router")]
        [JsonPropertyName("router")]
        public string Router { get; set; }
        
        [JsonProperty("name")]
        [JsonPropertyName("name")]
        public string Name { get; set; }
        
        [JsonProperty("target")]
        [JsonPropertyName("target")]
        public string Target { get; set; }
        
        [JsonProperty("priority")]
        [JsonPropertyName("priority")]
        public int Priority { get; set; }
        
        [JsonProperty("type")]
        [JsonPropertyName("type")]
        public string Type { get; set; }
        
        [JsonProperty("interaction")]
        [JsonPropertyName("interaction")]
        public string Interaction { get; set; }
        
        [JsonProperty("contentType")]
        [JsonPropertyName("contentType")]
        public ushort? ContentType { get; set; }
        
        [JsonProperty("method")]
        [JsonPropertyName("method")]
        public string Method { get; set; }
    }
}
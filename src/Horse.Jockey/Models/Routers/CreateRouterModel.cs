using System.Text.Json.Serialization;
using Newtonsoft.Json;

namespace Horse.Jockey.Models.Routers
{
    public class CreateRouterModel
    {
        [JsonProperty("name")]
        [JsonPropertyName("name")]
        public string Name { get; set; }

        [JsonProperty("method")]
        [JsonPropertyName("method")]
        public string Method { get; set; }
    }
}
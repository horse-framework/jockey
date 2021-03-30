using System.Text.Json.Serialization;
using Horse.WebSocket.Models;
using Newtonsoft.Json;

namespace Horse.Jockey.Models
{
    [ModelType("incoming-node")]
    internal class IncomingNodeInfo
    {
        [JsonProperty("id")]
        [JsonPropertyName("id")]
        public string Id { get; set; }

        [JsonProperty("name")]
        [JsonPropertyName("name")]
        public string Name { get; set; }

        [JsonProperty("type")]
        [JsonPropertyName("type")]
        public string Type { get; set; }

        [JsonProperty("ip")]
        [JsonPropertyName("ip")]
        public string IP { get; set; }

        [JsonProperty("connectedDate")]
        [JsonPropertyName("connectedDate")]
        public long ConnectedDate { get; set; }
    }
}
using System.Text.Json.Serialization;
using Horse.Protocols.WebSocket;
using Newtonsoft.Json;

namespace Horse.Jockey.Models.Clients
{
    [ModelType("client-info")]
    internal class ClientInfo
    {
        [JsonProperty("uniqueId")]
        [JsonPropertyName("uniqueId")]
        public string UniqueId { get; set; }

        [JsonProperty("name")]
        [JsonPropertyName("name")]
        public string Name { get; set; }

        [JsonProperty("type")]
        [JsonPropertyName("type")]
        public string Type { get; set; }

        [JsonProperty("ip")]
        [JsonPropertyName("ip")]
        public string IP { get; set; }

        [JsonProperty("isAuthenticated")]
        [JsonPropertyName("isAuthenticated")]
        public bool IsAuthenticated { get; set; }

        [JsonProperty("connectedDate")]
        [JsonPropertyName("connectedDate")]
        public long ConnectedDate { get; set; }
    }
}
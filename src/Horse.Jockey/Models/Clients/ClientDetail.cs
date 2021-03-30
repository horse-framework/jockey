using System.Text.Json.Serialization;
using Horse.WebSocket.Models;
using Newtonsoft.Json;

namespace Horse.Jockey.Models.Clients
{
    [ModelType("client-detail")]
    internal class ClientDetail : ClientInfo
    {
        [JsonProperty("protocol")]
        [JsonPropertyName("protocol")]
        public string Protocol { get; set; }

        [JsonProperty("subscriptions")]
        [JsonPropertyName("subscriptions")]
        public string[] Subscriptions { get; set; }
    }
}
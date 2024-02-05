using System.Text.Json.Serialization;
using Horse.WebSocket.Protocol;
using Newtonsoft.Json;

namespace Horse.Jockey.Models.WebSockets
{
    [ModelType("subscribe")]
    public class SubscriptionRequest
    {
        [JsonProperty("channel")]
        [JsonPropertyName("channel")]
        public string Channel { get; set; }

        [JsonProperty("join")]
        [JsonPropertyName("join")]
        public bool Join { get; set; }
    }
}
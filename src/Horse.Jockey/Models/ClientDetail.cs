using System.Text.Json.Serialization;
using Horse.WebSocket.Models;

namespace Horse.Jockey.Models
{
    [ModelType("client-detail")]
    public class ClientDetail : ClientInfo
    {
        [JsonPropertyName("protocol")]
        public string Protocol { get; set; }

        [JsonPropertyName("subscriptions")]
        public string[] Subscriptions { get; set; }
    }
}
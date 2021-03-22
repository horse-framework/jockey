using System.Text.Json.Serialization;
using Horse.WebSocket.Models;

namespace Horse.Jockey.Models
{
    [ModelType("user-info")]
    public class UserInfo
    {
        [JsonPropertyName("id")]
        public string Id { get; set; }

        [JsonPropertyName("name")]
        public string Name { get; set; }
    }
}
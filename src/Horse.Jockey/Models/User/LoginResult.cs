using System.Text.Json.Serialization;
using Horse.WebSocket.Protocol;
using Newtonsoft.Json;

namespace Horse.Jockey.Models.User
{
    [TextMessageType("login-result")]
    internal class LoginResult
    {
        [JsonProperty("ok")]
        [JsonPropertyName("ok")]
        public bool Ok { get; set; }

        [JsonProperty("token")]
        [JsonPropertyName("token")]
        public string Token { get; set; }
    }
}
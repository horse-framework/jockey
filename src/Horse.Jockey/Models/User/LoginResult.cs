using System.Text.Json.Serialization;
using Horse.Protocols.WebSocket;
using Newtonsoft.Json;

namespace Horse.Jockey.Models.User
{
    [ModelType("login-result")]
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
using System.Text.Json.Serialization;
using Horse.WebSocket.Models;
using Newtonsoft.Json;

namespace Horse.Jockey.Models.User
{
    [ModelType("user-login")]
    public class UserLogin
    {
        [JsonProperty("username")]
        [JsonPropertyName("username")]
        public string Username { get; set; }
        
        [JsonProperty("password")]
        [JsonPropertyName("password")]
        public string Password { get; set; }
    }
}
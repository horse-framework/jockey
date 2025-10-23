using System.Text.Json.Serialization;
using Horse.WebSocket.Protocol;
using Newtonsoft.Json;

namespace Horse.Jockey.Models.User
{
    /// <summary>
    /// User login request model for Jockey
    /// </summary>
    [TextMessageType("user-login")]
    public class UserLogin
    {
        /// <summary>
        /// Username
        /// </summary>
        [JsonProperty("username")]
        [JsonPropertyName("username")]
        public string Username { get; set; }
        
        /// <summary>
        /// User plain password
        /// </summary>
        [JsonProperty("password")]
        [JsonPropertyName("password")]
        public string Password { get; set; }
    }
}
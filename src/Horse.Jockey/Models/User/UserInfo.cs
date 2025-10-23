using System.Text.Json.Serialization;
using Horse.WebSocket.Protocol;
using Newtonsoft.Json;

namespace Horse.Jockey.Models.User
{
    /// <summary>
    /// User Informatio for Jockey.
    /// If authentication is successful, UserInfo keeps user data
    /// </summary>
    [TextMessageType("user-info")]
    public class UserInfo
    {
        /// <summary>
        /// User Unique Id
        /// </summary>
        [JsonProperty("id")]
        [JsonPropertyName("id")]
        public string Id { get; set; }

        /// <summary>
        /// User Name
        /// </summary>
        [JsonProperty("name")]
        [JsonPropertyName("name")]
        public string Name { get; set; }
    }
}
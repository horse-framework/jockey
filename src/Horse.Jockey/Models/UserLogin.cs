using System.Text.Json.Serialization;

namespace Horse.Jockey.Models
{
    public class UserLogin
    {
        [JsonPropertyName("username")]
        public string Username { get; set; }
        
        [JsonPropertyName("password")]
        public string Password { get; set; }
    }
}
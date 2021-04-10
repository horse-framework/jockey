using System.Text.Json.Serialization;
using Horse.WebSocket.Models;
using Newtonsoft.Json;

namespace Horse.Jockey.Models.WebSockets
{
    [ModelType("console")]
    public class ConsoleMessage
    {
        [JsonProperty("date")]
        [JsonPropertyName("date")]
        public long Date { get; set; }

        [JsonProperty("name")]
        [JsonPropertyName("name")]
        public string Name { get; set; }

        [JsonProperty("contentType")]
        [JsonPropertyName("contentType")]
        public ushort ContentType { get; set; }

        [JsonProperty("messageId")]
        [JsonPropertyName("messageId")]
        public string MessageId { get; set; }

        [JsonProperty("message")]
        [JsonPropertyName("message")]
        public string Message { get; set; }
        
        [JsonProperty("status")]
        [JsonPropertyName("status")]
        public string Status { get; set; }
    }
}
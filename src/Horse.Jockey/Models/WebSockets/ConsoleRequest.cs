using System.Text.Json.Serialization;
using Horse.WebSocket.Models;
using Newtonsoft.Json;

namespace Horse.Jockey.Models.WebSockets
{
    [ModelType("console-request")]
    public class ConsoleRequest
    {
        [JsonProperty("requestId")]
        [JsonPropertyName("requestId")]
        public string RequestId { get; set; }

        [JsonProperty("source")]
        [JsonPropertyName("source")]
        public string Source { get; set; }

        [JsonProperty("targetType")]
        [JsonPropertyName("targetType")]
        public string TargetType { get; set; }

        [JsonProperty("target")]
        [JsonPropertyName("target")]
        public string Target { get; set; }
    }
}
using System.Text.Json.Serialization;
using Horse.WebSocket.Protocol;
using Newtonsoft.Json;

namespace Horse.Jockey.Models.WebSockets
{
    /// <summary>
    /// Console subscription request model for websocket clients
    /// </summary>
    [ModelType("console-request")]
    public class ConsoleRequest
    {
        /// <summary>
        /// Unique Request Id
        /// </summary>
        [JsonProperty("requestId")]
        [JsonPropertyName("requestId")]
        public string RequestId { get; set; }

        /// <summary>
        /// Message source
        /// </summary>
        [JsonProperty("source")]
        [JsonPropertyName("source")]
        public string Source { get; set; }

        /// <summary>
        /// Message target type
        /// </summary>
        [JsonProperty("targetType")]
        [JsonPropertyName("targetType")]
        public string TargetType { get; set; }

        /// <summary>
        /// Message target
        /// </summary>
        [JsonProperty("target")]
        [JsonPropertyName("target")]
        public string Target { get; set; }
    }
}
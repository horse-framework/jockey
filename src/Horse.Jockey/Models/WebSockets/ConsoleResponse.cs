using System.Text.Json.Serialization;
using Horse.WebSocket.Protocol;
using Newtonsoft.Json;

namespace Horse.Jockey.Models.WebSockets
{
    /// <summary>
    /// Console message subscription response model for websocket clients
    /// </summary>
    [TextMessageType("console-response")]
    public class ConsoleResponse
    {
        /// <summary>
        /// Unique Request Id
        /// </summary>
        [JsonProperty("requestId")]
        [JsonPropertyName("requestId")]
        public string RequestId { get; set; }

        /// <summary>
        /// If true, subscribed.
        /// </summary>
        [JsonProperty("ok")]
        [JsonPropertyName("ok")]
        public bool Ok { get; set; }
    }
}
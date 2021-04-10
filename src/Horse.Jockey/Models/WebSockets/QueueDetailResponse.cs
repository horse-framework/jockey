using System.Text.Json.Serialization;
using Horse.WebSocket.Models;
using Newtonsoft.Json;

namespace Horse.Jockey.Models.WebSockets
{
    /// <summary>
    /// Queue detailed page events subscription response model for websocket clients
    /// </summary>
    [ModelType("queue-detail-response")]
    public class QueueDetailResponse
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
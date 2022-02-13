using System.Text.Json.Serialization;
using Horse.Protocols.WebSocket;
using Newtonsoft.Json;

namespace Horse.Jockey.Models.WebSockets
{
    /// <summary>
    /// Queue detailed page events subscription request model for websocket clients
    /// </summary>
    [ModelType("queue-detail-request")]
    public class QueueDetailRequest
    {
        /// <summary>
        /// Unique Request Id
        /// </summary>
        [JsonProperty("requestId")]
        [JsonPropertyName("requestId")]
        public string RequestId { get; set; }

        /// <summary>
        /// Name of the queue
        /// </summary>
        [JsonProperty("name")]
        [JsonPropertyName("name")]
        public string Name { get; set; }
    }
}
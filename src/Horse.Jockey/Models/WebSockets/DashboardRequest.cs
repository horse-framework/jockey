using System.Text.Json.Serialization;
using Horse.Protocols.WebSocket;
using Newtonsoft.Json;

namespace Horse.Jockey.Models.WebSockets
{
    /// <summary>
    /// Dashboard subscription request model for websocket clients
    /// </summary>
    [ModelType("dashboard-request")]
    public class DashboardRequest
    {
        /// <summary>
        /// Unique Request Id
        /// </summary>
        [JsonProperty("requestId")]
        [JsonPropertyName("requestId")]
        public string RequestId { get; set; }

        /// <summary>
        /// If true, subscribes to dashboard events. If false, unsubscribes.
        /// </summary>
        [JsonProperty("join")]
        [JsonPropertyName("join")]
        public bool Join { get; set; }
    }
}
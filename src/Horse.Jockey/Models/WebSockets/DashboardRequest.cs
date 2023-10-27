using System.Text.Json.Serialization;
using Horse.WebSocket.Protocol;
using Newtonsoft.Json;

namespace Horse.Jockey.Models.WebSockets
{
    /// <summary>
    /// Dashboard subscription request model for websocket clients
    /// </summary>
    [ModelType("dashboard")]
    public class DashboardRequest
    {
        /// <summary>
        /// If true, subscribes to dashboard events. If false, unsubscribes.
        /// </summary>
        [JsonProperty("join")]
        [JsonPropertyName("join")]
        public bool Join { get; set; }
    }
}
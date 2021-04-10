using System.Text.Json.Serialization;
using Horse.WebSocket.Models;
using Newtonsoft.Json;

namespace Horse.Jockey.Models.WebSockets
{
    [ModelType("dashboard-request")]
    public class DashboardRequest
    {
        [JsonProperty("requestId")]
        [JsonPropertyName("requestId")]
        public string RequestId { get; set; }

        [JsonProperty("join")]
        [JsonPropertyName("join")]
        public bool Join { get; set; }
    }
}
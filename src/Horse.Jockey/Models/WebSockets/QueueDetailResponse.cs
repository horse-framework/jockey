using System.Text.Json.Serialization;
using Horse.WebSocket.Models;
using Newtonsoft.Json;

namespace Horse.Jockey.Models.WebSockets
{
    [ModelType("queue-detail-response")]
    public class QueueDetailResponse
    {
        [JsonProperty("requestId")]
        [JsonPropertyName("requestId")]
        public string RequestId { get; set; }

        [JsonProperty("ok")]
        [JsonPropertyName("ok")]
        public bool Ok { get; set; }
    }
}
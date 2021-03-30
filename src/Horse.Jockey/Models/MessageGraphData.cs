using System.Text.Json.Serialization;
using Horse.WebSocket.Models;
using Newtonsoft.Json;

namespace Horse.Jockey.Models
{
    [ModelType("msg-graph-data")]
    internal class MessageGraphData
    {
        [JsonProperty("directMessage")]
        [JsonPropertyName("directMessage")]
        public long DirectMessage { get; set; }

        [JsonProperty("directResponse")]
        [JsonPropertyName("directResponse")]
        public long DirectResponse { get; set; }

        [JsonProperty("directNoReceiver")]
        [JsonPropertyName("directNoReceiver")]
        public long DirectNoReceiver { get; set; }

        [JsonProperty("directDelivery")]
        [JsonPropertyName("directDelivery")]
        public long DirectDelivery { get; set; }

        [JsonProperty("routerPublish")]
        [JsonPropertyName("routerPublish")]
        public long RouterPublish { get; set; }

        [JsonProperty("routerNotFound")]
        [JsonPropertyName("routerNotFound")]
        public long RouterNotFound { get; set; }

        [JsonProperty("routerOk")]
        [JsonPropertyName("routerOk")]
        public long RouterOk { get; set; }

        [JsonProperty("routerFailed")]
        [JsonPropertyName("routerFailed")]
        public long RouterFailed { get; set; }
    }
}
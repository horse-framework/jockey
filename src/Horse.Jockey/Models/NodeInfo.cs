using System.Text.Json.Serialization;
using Horse.WebSocket.Models;
using Newtonsoft.Json;

namespace Horse.Jockey.Models
{
    [ModelType("node-info")]
    internal class NodeInfo
    {
        /// <summary>
        /// Descriptor name for the node
        /// </summary>
        [JsonProperty("name")]
        [JsonPropertyName("name")]
        public string Name { get; set; }

        /// <summary>
        /// Instance hostname
        /// </summary>
        [JsonProperty("host")]
        [JsonPropertyName("host")]
        public string Host { get; set; }

        /// <summary>
        /// Authentication token for the node
        /// </summary>
        [JsonProperty("token")]
        [JsonPropertyName("token")]
        public string Token { get; set; }

        /// <summary>
        /// How many milliseconds should wait to try reconnect
        /// </summary>
        [JsonProperty("reconnectWait")]
        [JsonPropertyName("reconnectWait")]
        public int ReconnectWait { get; set; }
    }
}
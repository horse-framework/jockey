using System.Text.Json.Serialization;
using Horse.WebSocket.Protocol;
using Newtonsoft.Json;

namespace Horse.Jockey.Models
{
    [ModelType("node-info")]
    internal class NodeInfo
    {
        /// <summary>
        /// Node unique id
        /// </summary>
        [JsonProperty("id")]
        [JsonPropertyName("id")]
        public string Id { get; set; }

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
        /// Public host name
        /// </summary>
        [JsonProperty("publicHost")]
        [JsonPropertyName("publicHost")]
        public string PublicHost { get; set; }

        /// <summary>
        /// Node state; Main, Successor, Replica
        /// </summary>
        [JsonProperty("state")]
        [JsonPropertyName("state")]
        public string State { get; set; }

        /// <summary>
        /// Connected date in unix seconds
        /// </summary>
        [JsonProperty("connectedDate")]
        [JsonPropertyName("connectedDate")]
        public long ConnectedDate { get; set; }
    }
}
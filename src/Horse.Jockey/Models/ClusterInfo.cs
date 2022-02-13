using System.Collections.Generic;
using System.Text.Json.Serialization;
using Horse.Protocols.WebSocket;
using Newtonsoft.Json;

namespace Horse.Jockey.Models
{
    [ModelType("cluster-info")]
    internal class ClusterInfo
    {
        [JsonProperty("mode")]
        [JsonPropertyName("mode")]
        public string Mode { get; set; }

        [JsonProperty("nodes")]
        [JsonPropertyName("nodes")]
        public List<NodeInfo> Nodes { get; set; }
    }
}
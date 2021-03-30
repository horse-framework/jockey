using System.Collections.Generic;
using System.Text.Json.Serialization;
using Horse.WebSocket.Models;
using Newtonsoft.Json;

namespace Horse.Jockey.Models
{
    [ModelType("node-list")]
    internal class NodeListInfo
    {
        [JsonProperty("incoming")]
        [JsonPropertyName("incoming")]
        public List<IncomingNodeInfo> Incoming { get; set; }

        [JsonProperty("outgoing")]
        [JsonPropertyName("outgoing")]
        public List<NodeInfo> Outgoing { get; set; }
    }
}
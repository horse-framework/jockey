using System.Collections.Generic;
using System.Text.Json.Serialization;
using Horse.WebSocket.Protocol;
using Newtonsoft.Json;

namespace Horse.Jockey.Models.WebSockets;

[TextMessageType("direct-graph")]
public class DirectGraphModel
{
    [JsonProperty("n")]
    [JsonPropertyName("n")]
    public string Name { get; set; }
    
    [JsonProperty("d")]
    [JsonPropertyName("d")]
    public IEnumerable<CountRecord> Counts { get; set; }
}
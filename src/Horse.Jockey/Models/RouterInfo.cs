using System.Collections.Generic;
using System.Text.Json.Serialization;
using Horse.WebSocket.Models;
using Newtonsoft.Json;

namespace Horse.Jockey.Models
{
    [ModelType("router-info")]
    public class RouterInfo
    {
        [JsonProperty("name")]
        [JsonPropertyName("name")]
        public string Name { get; set; }

        [JsonProperty("enabled")]
        [JsonPropertyName("enabled")]
        public bool IsEnabled { get; set; }

        [JsonProperty("bindings")]
        [JsonPropertyName("bindings")]
        public IEnumerable<BindingInfo> Bindings { get; set; }
    }
}
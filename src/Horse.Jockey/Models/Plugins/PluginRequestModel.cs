using System.Text.Json.Serialization;
using Newtonsoft.Json;

namespace Horse.Jockey.Models.Plugins;

public class PluginRequestModel
{
    [JsonProperty("name")]
    [JsonPropertyName("name")]
    public string Name { get; set; }
}
using System.Text.Json.Serialization;
using Newtonsoft.Json;

namespace Horse.Jockey.Models.Plugins;

public class PluginInfoModel
{
    [JsonProperty("name")]
    [JsonPropertyName("name")]
    public string Name { get; set; }

    [JsonProperty("builder")]
    [JsonPropertyName("builder")]
    public string Builder { get; set; }

    [JsonProperty("disabled")]
    [JsonPropertyName("disabled")]
    public bool Disabled { get; set; }

    [JsonProperty("removed")]
    [JsonPropertyName("removed")]
    public bool Removed { get; set; }
}
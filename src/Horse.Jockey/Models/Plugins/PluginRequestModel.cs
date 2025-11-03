using System.Text.Json.Serialization;

namespace Horse.Jockey.Models.Plugins;

public class PluginRequestModel
{
    [JsonPropertyName("name")]
    public string Name { get; set; }
    
    [JsonPropertyName("version")]
    public string Version { get; set; }
}
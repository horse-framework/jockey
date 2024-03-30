using System.Collections.Generic;
using System.Text.Json.Serialization;
using Newtonsoft.Json;

namespace Horse.Jockey.Models.Plugins;

public class PluginAssemblyModel
{
    [JsonProperty("fullname")]
    [JsonPropertyName("fullname")]
    public string Fullname { get; set; }
    
    [JsonProperty("location")]
    [JsonPropertyName("location")]
    public string Location { get; set; }
    
    [JsonProperty("version")]
    [JsonPropertyName("version")]
    public string Version { get; set; }
    
    [JsonProperty("plugins")]
    [JsonPropertyName("plugins")]
    public List<PluginInfoModel> Plugins { get; set; }
}
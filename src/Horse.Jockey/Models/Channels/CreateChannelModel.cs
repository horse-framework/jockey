using System.Text.Json.Serialization;
using Newtonsoft.Json;

namespace Horse.Jockey.Models.Channels;

public class CreateChannelModel
{
    [JsonProperty("name")]
    [JsonPropertyName("name")]
    public string Name { get; set; }

    [JsonProperty("autoDestroy")]
    [JsonPropertyName("autoDestroy")]
    public bool AutoDestroy { get; set; }
    
    [JsonProperty("clientLimit")]
    [JsonPropertyName("clientLimit")]
    public int ClientLimit { get; set; }
    
    [JsonProperty("messageSizeLimit")]
    [JsonPropertyName("messageSizeLimit")]
    public ulong MessageSizeLimit { get; set; }
    
    [JsonProperty("autoDestroyIdleSeconds")]
    [JsonPropertyName("autoDestroyIdleSeconds")]
    public int AutoDestroyIdleSeconds { get; set; }
    
    [JsonProperty("sendLastMessageAsInitial")]
    [JsonPropertyName("sendLastMessageAsInitial")]
    public bool SendLastMessageAsInitial { get; set; }
    
    [JsonProperty("topic")]
    [JsonPropertyName("topic")]
    public string Topic { get; set; }
}
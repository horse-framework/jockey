using System.Text.Json.Serialization;
using Newtonsoft.Json;

namespace Horse.Jockey.Models.Channels;

public class ChannelOptionsModel
{
    [JsonProperty("clientLimit")]
    [JsonPropertyName("clientLimit")]
    public int ClientLimit { get; set; }

    [JsonProperty("autoDestroy")]
    [JsonPropertyName("autoDestroy")]
    public bool AutoDestroy { get; set; }

    [JsonProperty("messageSizeLimit")]
    [JsonPropertyName("messageSizeLimit")]
    public ulong MessageSizeLimit { get; set; }

    [JsonProperty("autoDestroyIdleSeconds")]
    [JsonPropertyName("autoDestroyIdleSeconds")]
    public int AutoDestroyIdleSeconds { get; set; }
}
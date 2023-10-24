using System.Text.Json.Serialization;
using Newtonsoft.Json;

namespace Horse.Jockey.Models;

public class CacheItemModel
{
    [JsonProperty("key")]
    [JsonPropertyName("key")]
    public string Key { get; set; }

    [JsonProperty("expiration")]
    [JsonPropertyName("expiration")]
    public long Expiration { get; set; }

    [JsonProperty("warningDate")]
    [JsonPropertyName("warningDate")]
    public long WarningDate { get; set; }

    [JsonProperty("warnCount")]
    [JsonPropertyName("warnCount")]
    public int WarnCount { get; set; }

    [JsonProperty("tags")]
    [JsonPropertyName("tags")]
    public string[] Tags { get; set; }

    [JsonProperty("value")]
    [JsonPropertyName("value")]
    public string Value { get; set; }
}
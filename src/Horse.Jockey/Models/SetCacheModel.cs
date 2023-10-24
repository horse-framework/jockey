using System.Text.Json.Serialization;
using Newtonsoft.Json;

namespace Horse.Jockey.Models;

public class SetCacheModel
{
    [JsonProperty("key")]
    [JsonPropertyName("key")]
    public string Key { get; set; }

    [JsonProperty("content")]
    [JsonPropertyName("content")]
    public string Content { get; set; }

    /// <summary>
    /// In seconds
    /// </summary>
    [JsonProperty("duration")]
    [JsonPropertyName("duration")]
    public int Duration { get; set; }

    /// <summary>
    /// In seconds
    /// </summary>
    [JsonProperty("expirationWarning")]
    [JsonPropertyName("expirationWarning")]
    public int ExpirationWarning { get; set; }

    [JsonProperty("tags")]
    [JsonPropertyName("tags")]
    public string[] Tags { get; set; }
}
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Newtonsoft.Json;

namespace Horse.Jockey.Models;

public class HorseMessageModel
{
    [JsonProperty("id")]
    [JsonPropertyName("id")]
    public string Id { get; set; }

    [JsonProperty("type")]
    [JsonPropertyName("type")]
    public string Type { get; set; }

    [JsonProperty("source")]
    [JsonPropertyName("source")]
    public string Source { get; set; }

    [JsonProperty("target")]
    [JsonPropertyName("target")]
    public string Target { get; set; }

    [JsonProperty("priority")]
    [JsonPropertyName("priority")]
    public bool HighPriority { get; set; }

    [JsonProperty("waitForResponse")]
    [JsonPropertyName("waitForResponse")]
    public bool WaitForResponse { get; set; }

    [JsonProperty("contentType")]
    [JsonPropertyName("contentType")]
    public ushort ContentType { get; set; }

    [JsonProperty("content")]
    [JsonPropertyName("content")]
    public string Content { get; set; }

    [JsonProperty("headers")]
    [JsonPropertyName("headers")]
    public IEnumerable<KeyValuePair<string, string>> Headers { get; set; }
}
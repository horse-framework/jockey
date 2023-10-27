using System.Collections.Generic;
using System.Text.Json.Serialization;
using Newtonsoft.Json;

namespace Horse.Jockey.Models;

/// <summary>
/// Each Dot record for line charts
/// </summary>
/// <param name="u">Date</param>
/// <param name="r">Received</param>
/// <param name="s">Sent</param>
/// <param name="rs">Respond</param>
/// <param name="e">Error</param>
/// <param name="d">Delivered</param>
/// <param name="nr">Not Routed</param>
/// <param name="to">Timed out</param>
public record CountRecord(long u, long r, long s, long rs, long e, long d, long nr, long to);

public class MessageCountModel
{
    [JsonProperty("n")]
    [JsonPropertyName("n")]
    public string Name { get; set; }

    /// <summary>
    /// 1d, 10d, 3h
    /// </summary>
    [JsonProperty("r")]
    [JsonPropertyName("r")]
    public string Resolution { get; set; }

    [JsonProperty("d")]
    [JsonPropertyName("d")]
    public IEnumerable<CountRecord> Data { get; set; }
}
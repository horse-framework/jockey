using System.Collections.Generic;
using System.Text.Json.Serialization;
using Newtonsoft.Json;

namespace Horse.Jockey.Models.Channels;

public class ChannelDetail
{
    [JsonProperty("name")]
    [JsonPropertyName("name")]
    public string Name { get; set; }

    [JsonProperty("topic")]
    [JsonPropertyName("topic")]
    public string Topic { get; set; }

    [JsonProperty("status")]
    [JsonPropertyName("status")]
    public string Status { get; set; }

    [JsonProperty("lastPublishDate")]
    [JsonPropertyName("lastPublishDate")]
    public long LastPublishDate { get; set; }

    [JsonProperty("publish")]
    [JsonPropertyName("publish")]
    public long Publish { get; set; }

    [JsonProperty("receive")]
    [JsonPropertyName("receive")]
    public long Receive { get; set; }

    [JsonProperty("subscriberCount")]
    [JsonPropertyName("subscriberCount")]
    public int SubscriberCount { get; set; }

    [JsonProperty("hasInitialMessage")]
    [JsonPropertyName("hasInitialMessage")]
    public bool HasInitialMessage { get; set; }

    [JsonProperty("options")]
    [JsonPropertyName("options")]
    public ChannelOptionsModel Options { get; set; }

    [JsonProperty("subscribers")]
    [JsonPropertyName("subscribers")]
    public IEnumerable<ChannelSubscriberModel> Subscribers { get; set; }
}
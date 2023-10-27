using System.Text.Json.Serialization;
using Newtonsoft.Json;

namespace Horse.Jockey.Models.Channels;

public class ChannelSubscriberModel
{
    [JsonProperty("type")]
    [JsonPropertyName("type")]
    public string Type { get; set; }

    [JsonProperty("name")]
    [JsonPropertyName("name")]
    public string Name { get; set; }

    [JsonProperty("id")]
    [JsonPropertyName("id")]
    public string Id { get; set; }

    [JsonProperty("subscriptionDate")]
    [JsonPropertyName("subscriptionDate")]
    public long SubscriptionDate { get; set; }
}
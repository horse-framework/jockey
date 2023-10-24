using System.Text.Json.Serialization;
using Newtonsoft.Json;

namespace Horse.Jockey.Models.Queues;

public class QueueConsumerInfo
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

    [JsonProperty("currentlyProcessing")]
    [JsonPropertyName("currentlyProcessing")]
    public bool CurrentlyProcessing { get; set; }

    [JsonProperty("processingDeadline")]
    [JsonPropertyName("processingDeadline")]
    public long ProcessingDeadline { get; set; }

    [JsonProperty("consumes")]
    [JsonPropertyName("consumes")]
    public long ConsumeCount { get; set; }

    [JsonProperty("acks")]
    [JsonPropertyName("acks")]
    public long AcknowledgeCount { get; set; }

    [JsonProperty("ackTimeouts")]
    [JsonPropertyName("ackTimeouts")]
    public long AckTimeoutCount { get; set; }
}
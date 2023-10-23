namespace Horse.Jockey.Models.Queues;

public class QueueConsumerInfo
{
    public string Type { get; set; }
    public string Name { get; set; }
    public string Id { get; set; }
    public long SubscriptionDate { get; set; }
    public bool CurrentlyProcessing { get; set; }
    public long ProcessingDeadline { get; set; }
    public long ConsumeCount { get; set; }
    public long AcknowledgeCount { get; set; }
    public long AckTimeoutCount { get; set; }
}
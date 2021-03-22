namespace Horse.Jockey.Models
{
    public class HorseQueueStatistics
    {
        public string Name { get; set; }
        public int Consumers { get; set; }
        public int StoredMsgs { get; set; }
        public int ProcessingMsgs { get; set; }
        public int AckPendingMsgs { get; set; }

        public long LastPublished { get; set; }
        public long LastConsumed { get; set; }

        public long TotalPublishes { get; set; }
        public long TotalDeliveries { get; set; }
    }
}
using System.Text.Json.Serialization;
using Newtonsoft.Json;

namespace Horse.Jockey.Models.Queues
{
    public class QueuePushModel
    {
        [JsonProperty("queue")]
        [JsonPropertyName("queue")]
        public string Queue { get; set; }
        
        [JsonProperty("id")]
        [JsonPropertyName("id")]
        public string Id { get; set; }

        [JsonProperty("contentType")]
        [JsonPropertyName("contentType")]
        public ushort ContentType { get; set; }

        [JsonProperty("priority")]
        [JsonPropertyName("priority")]
        public bool Priority { get; set; }

        [JsonProperty("message")]
        [JsonPropertyName("message")]
        public string Message { get; set; }

        [JsonProperty("headers")]
        [JsonPropertyName("headers")]
        public QueueHeaderModel[] Headers { get; set; }
    }
}
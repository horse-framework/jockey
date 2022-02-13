using System.Text.Json.Serialization;
using Horse.Protocols.WebSocket;
using Newtonsoft.Json;

namespace Horse.Jockey.Models.WebSockets
{
    /// <summary>
    /// Console message for websocket clients
    /// </summary>
    [ModelType("console")]
    public class ConsoleMessage
    {
        /// <summary>
        /// Message date in unix seconds
        /// </summary>
        [JsonProperty("date")]
        [JsonPropertyName("date")]
        public long Date { get; set; }

        /// <summary>
        /// Name of the queue, router or direct target
        /// </summary>
        [JsonProperty("name")]
        [JsonPropertyName("name")]
        public string Name { get; set; }

        /// <summary>
        /// Message content type
        /// </summary>
        [JsonProperty("contentType")]
        [JsonPropertyName("contentType")]
        public ushort ContentType { get; set; }

        /// <summary>
        /// Message Id
        /// </summary>
        [JsonProperty("messageId")]
        [JsonPropertyName("messageId")]
        public string MessageId { get; set; }

        /// <summary>
        /// Message content
        /// </summary>
        [JsonProperty("message")]
        [JsonPropertyName("message")]
        public string Message { get; set; }
        
        /// <summary>
        /// Message status. Describes if the message is routed, sent or failed etc.
        /// </summary>
        [JsonProperty("status")]
        [JsonPropertyName("status")]
        public string Status { get; set; }
    }
}
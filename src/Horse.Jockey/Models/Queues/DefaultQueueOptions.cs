using System;
using System.Text.Json.Serialization;
using Horse.Mq;
using Newtonsoft.Json;

namespace Horse.Jockey.Models.Queues
{
    public class DefaultQueueOptions
    {
        /// <summary>
        /// Acknowledge decision.
        /// </summary>
        [JsonProperty("ack")]
        [JsonPropertyName("ack")]
        public string Acknowledge { get; set; }

        /// <summary>
        /// When acknowledge is required, maximum duration for waiting acknowledge message (in milliseconds)
        /// </summary>
        [JsonProperty("ackTimeout")]
        [JsonPropertyName("ackTimeout")]
        public int AcknowledgeTimeout { get; set; }

        /// <summary>
        /// When message queuing is active, maximum time for a message wait (in milliseconds)
        /// </summary>
        [JsonProperty("msgTimeout")]
        [JsonPropertyName("msgTimeout")]
        public int MessageTimeout { get; set; }

        /// <summary>
        /// If true, server creates unique id for each message.
        /// </summary>
        [JsonProperty("useMsgId")]
        [JsonPropertyName("useMsgId")]
        public bool UseMessageId { get; set; } = true;

        /// <summary>
        /// If true, server doesn't send client name to receivers in queueus.
        /// </summary>
        [JsonProperty("hideClientNames")]
        [JsonPropertyName("hideClientNames")]
        public bool HideClientNames { get; set; }

        /// <summary>
        /// Default status for the queue
        /// </summary>
        [JsonProperty("status")]
        [JsonPropertyName("status")]
        public string Status { get; set; }

        /// <summary>
        /// Maximum message limit of the queue
        /// Zero is unlimited
        /// </summary>
        [JsonProperty("msgLimit")]
        [JsonPropertyName("msgLimit")]
        public int MessageLimit { get; set; }

        /// <summary>
        /// Maximum message size limit
        /// Zero is unlimited
        /// </summary>
        [JsonProperty("msgSizeLimit")]
        [JsonPropertyName("msgSizeLimit")]
        public ulong MessageSizeLimit { get; set; }

        /// <summary>
        /// Maximum client limit of the queue
        /// Zero is unlimited
        /// </summary>
        [JsonProperty("clientLimit")]
        [JsonPropertyName("clientLimit")]
        public int ClientLimit { get; set; }

        /// <summary>
        /// Waits in milliseconds after sending each message to it's consumers.
        /// Zero is no delay.
        /// </summary>
        [JsonProperty("delayBetweenMsgs")]
        [JsonPropertyName("delayBetweenMsgs")]
        public int DelayBetweenMessages { get; set; }

        /// <summary>
        /// Waits in milliseconds before putting message back into the queue.
        /// Zero is no delay.
        /// </summary>
        [JsonProperty("putbackDelay")]
        [JsonPropertyName("putbackDelay")]
        public int PutBackDelay { get; set; }

        /// <summary>
        /// Queue auto destroy options.
        /// </summary>
        [JsonProperty("autoDestroy")]
        [JsonPropertyName("autoDestroy")]
        public string AutoDestroy { get; set; }

        public static DefaultQueueOptions Create(HorseMq mq)
        {
            return new()
                   {
                       Acknowledge = mq.Options.Acknowledge.ToString(),
                       Status = mq.Options.Status.ToString(),
                       AcknowledgeTimeout = Convert.ToInt32(mq.Options.AcknowledgeTimeout.TotalMilliseconds),
                       AutoDestroy = mq.Options.AutoDestroy.ToString(),
                       ClientLimit = mq.Options.ClientLimit,
                       MessageLimit = mq.Options.MessageLimit,
                       MessageTimeout = Convert.ToInt32(mq.Options.MessageTimeout.TotalMilliseconds),
                       DelayBetweenMessages = mq.Options.DelayBetweenMessages,
                       HideClientNames = mq.Options.HideClientNames,
                       MessageSizeLimit = mq.Options.MessageSizeLimit,
                       PutBackDelay = mq.Options.PutBackDelay,
                       UseMessageId = mq.Options.UseMessageId
                   };
        }
    }
}
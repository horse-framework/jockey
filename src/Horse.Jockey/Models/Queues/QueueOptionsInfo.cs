using System;
using System.Text.Json.Serialization;
using Horse.Messaging.Server;
using Horse.Messaging.Server.Queues;
using Newtonsoft.Json;

namespace Horse.Jockey.Models.Queues
{
	internal class QueueOptionsInfo
	{
		/// <summary>
		///     Acknowledge decision.
		/// </summary>
		[JsonProperty("ack")]
		[JsonPropertyName("ack")]
		public string Acknowledge { get; set; }

		/// <summary>
		///     When acknowledge is required, maximum duration for waiting acknowledge message (in milliseconds)
		/// </summary>
		[JsonProperty("ackTimeout")]
		[JsonPropertyName("ackTimeout")]
		public int AcknowledgeTimeout { get; set; }

		/// <summary>
		///     When message queuing is active, maximum time for a message wait (in milliseconds)
		/// </summary>
		[JsonProperty("msgTimeout")]
		[JsonPropertyName("msgTimeout")]
		public int MessageTimeout { get; set; }

		/// <summary>
		///     Default status for the queue
		/// </summary>
		[JsonProperty("type")]
		[JsonPropertyName("type")]
		public string Type { get; set; }

		/// <summary>
		///     Maximum message limit of the queue
		///     Zero is unlimited
		/// </summary>
		[JsonProperty("msgLimit")]
		[JsonPropertyName("msgLimit")]
		public int MessageLimit { get; set; }

		/// <summary>
		///     Maximum message size limit
		///     Zero is unlimited
		/// </summary>
		[JsonProperty("msgSizeLimit")]
		[JsonPropertyName("msgSizeLimit")]
		public ulong MessageSizeLimit { get; set; }

		/// <summary>
		///     Maximum client limit of the queue
		///     Zero is unlimited
		/// </summary>
		[JsonProperty("clientLimit")]
		[JsonPropertyName("clientLimit")]
		public int ClientLimit { get; set; }

		/// <summary>
		///     Waits in milliseconds after sending each message to it's consumers.
		///     Zero is no delay.
		/// </summary>
		[JsonProperty("delayBetweenMsgs")]
		[JsonPropertyName("delayBetweenMsgs")]
		public int DelayBetweenMessages { get; set; }

		/// <summary>
		///     Waits in milliseconds before putting message back into the queue.
		///     Zero is no delay.
		/// </summary>
		[JsonProperty("putbackDelay")]
		[JsonPropertyName("putbackDelay")]
		public int PutBackDelay { get; set; }

		/// <summary>
		///     Queue auto destroy options.
		/// </summary>
		[JsonProperty("autoDestroy")]
		[JsonPropertyName("autoDestroy")]
		public string AutoDestroy { get; set; }

		public static QueueOptionsInfo Create(HorseQueue queue)
		{
			return new QueueOptionsInfo
			{
				Acknowledge = queue.Options.Acknowledge.ToString(),
				Type = queue.Options.Type.ToString(),
				AcknowledgeTimeout = Convert.ToInt32(queue.Options.AcknowledgeTimeout.TotalMilliseconds),
				AutoDestroy = queue.Options.AutoDestroy.ToString(),
				ClientLimit = queue.Options.ClientLimit,
				MessageLimit = queue.Options.MessageLimit,
				MessageTimeout = Convert.ToInt32(queue.Options.MessageTimeout.TotalMilliseconds),
				DelayBetweenMessages = queue.Options.DelayBetweenMessages,
				MessageSizeLimit = queue.Options.MessageSizeLimit,
				PutBackDelay = queue.Options.PutBackDelay
			};
		}

		public static QueueOptionsInfo CreateDefault(HorseRider rider)
		{
			return new QueueOptionsInfo
			{
				Acknowledge = rider.Queue.Options.Acknowledge.ToString(),
				Type = rider.Queue.Options.Type.ToString(),
				AcknowledgeTimeout = Convert.ToInt32(rider.Queue.Options.AcknowledgeTimeout.TotalMilliseconds),
				AutoDestroy = rider.Queue.Options.AutoDestroy.ToString(),
				ClientLimit = rider.Queue.Options.ClientLimit,
				MessageLimit = rider.Queue.Options.MessageLimit,
				MessageTimeout = Convert.ToInt32(rider.Queue.Options.MessageTimeout.TotalMilliseconds),
				DelayBetweenMessages = rider.Queue.Options.DelayBetweenMessages,
				MessageSizeLimit = rider.Queue.Options.MessageSizeLimit,
				PutBackDelay = rider.Queue.Options.PutBackDelay
			};
		}
	}
}
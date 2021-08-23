using Horse.Messaging.Server.Queues;
using Horse.Protocols.WebSocket;

namespace Horse.Jockey.Models.Subscriptions
{
	internal class QueueDetailSubscription
	{
		public WsServerSocket Client { get; init; }
		public HorseQueue Queue { get; init; }
	}
}
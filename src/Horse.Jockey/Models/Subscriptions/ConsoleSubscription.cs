using Horse.Protocols.WebSocket;

namespace Horse.Jockey.Models.Subscriptions
{
    internal class ConsoleSubscription
    {
        public WsServerSocket Client { get; set; }
        public SubscriptionSource Source { get; set; }
        public SubscriptionTargetType TargetType { get; set; }
        public string Target { get; set; }
    }
}
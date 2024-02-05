using Horse.Messaging.Server.Clients;
using Horse.WebSocket.Protocol;

namespace Horse.Jockey.Models.Subscriptions;

internal class ClientDetailSubscription
{
    public WsServerSocket Client { get; init; }
    public MessagingClient TargetClient { get; init; }
}
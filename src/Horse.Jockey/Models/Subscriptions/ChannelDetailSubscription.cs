using Horse.Messaging.Server.Channels;
using Horse.WebSocket.Protocol;

namespace Horse.Jockey.Models.Subscriptions;

internal class ChannelDetailSubscription
{
    public WsServerSocket Client { get; set; }
    public HorseChannel Channel { get; set; }
    public string Resolution { get; set; } = "1m";
}
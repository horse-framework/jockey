using Horse.Core;
using Horse.Protocols.WebSocket;

namespace Horse.Jockey.Core
{
    public class JockeyWsClient : WsServerSocket
    {
        public bool IsAuthenticated { get; set; }

        public JockeyWsClient(IHorseServer server, IConnectionInfo info) : base(server, info)
        {
        }
    }
}
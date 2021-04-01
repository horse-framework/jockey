using System;
using System.Threading.Tasks;
using Horse.Jockey.Core;
using Horse.Jockey.Models.User;
using Horse.Protocols.WebSocket;
using Horse.WebSocket.Models;

namespace Horse.Jockey.Handlers.WebSockets
{
    public class LoginHandler : IWebSocketMessageHandler<UserLogin>
    {
        private readonly JockeyOptions _options;
        private readonly IWebSocketServerBus _bus;

        public LoginHandler(JockeyOptions options, IWebSocketServerBus bus)
        {
            _options = options;
            _bus = bus;
        }

        public async Task Handle(UserLogin model, WebSocketMessage message, IHorseWebSocket client)
        {
            JockeyWsClient ws = client as JockeyWsClient;
            if (ws == null)
                return;

            UserInfo info;
            if (_options.AuthAsync != null)
                info = await _options.AuthAsync(model);
            else
                info = new UserInfo
                       {
                           Id = "0",
                           Name = "Admin"
                       };

            ws.IsAuthenticated = info != null;
            await _bus.SendAsync(ws, info);
        }

        public Task OnError(Exception exception, UserLogin model, WebSocketMessage message, IHorseWebSocket client)
        {
            return Task.CompletedTask;
        }
    }
}
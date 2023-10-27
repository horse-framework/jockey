using System.Threading.Tasks;
using Horse.Jockey.Core;
using Horse.Jockey.Handlers.Queues;
using Horse.Messaging.Server;
using Horse.Messaging.Server.Clients;

namespace Horse.Jockey.Handlers;

internal class ClientHandler : BaseHandler, IClientHandler
{
    private readonly MessageCounter _counter;

    public ClientHandler(MessageCounter counter)
    {
        _counter = counter;
    }

    public Task Connected(HorseRider server, MessagingClient client)
    {
        _counter.AddDirectCounter(client.UniqueId);
        return Task.CompletedTask;
    }

    public Task Disconnected(HorseRider server, MessagingClient client)
    {
        _counter.RemoveDirectCounter(client.UniqueId);
        return Task.CompletedTask;
    }
}
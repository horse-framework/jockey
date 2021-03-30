using System.Threading.Tasks;
using Horse.Jockey.Core;
using Horse.Mq;
using Horse.Mq.Clients;
using Horse.Mq.Routing;
using Horse.Protocols.Hmq;

namespace Horse.Jockey.Handlers.Queues
{
    internal class RouterMessageHandler : IRouterMessageHandler
    {
        private readonly MessageCounter _counter;

        public RouterMessageHandler(MessageCounter counter)
        {
            _counter = counter;
        }

        public Task OnRouterNotFound(MqClient sender, HorseMessage message)
        {
            _counter.AddRouterPublish();
            _counter.AddRouterNotFound();
            return Task.CompletedTask;
        }

        public  Task OnNotRouted(MqClient sender, IRouter router, HorseMessage message)
        {
            _counter.AddRouterPublish();
            _counter.AddRouterFailed();
            return Task.CompletedTask;
        }

        public  Task OnRouted(MqClient sender, IRouter router, HorseMessage message)
        {
            _counter.AddRouterPublish();
            _counter.AddRouterOk();
            return Task.CompletedTask;
        }
    }
}
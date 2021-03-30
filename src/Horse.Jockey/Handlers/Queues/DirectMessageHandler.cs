using System.Collections.Generic;
using System.Threading.Tasks;
using Horse.Jockey.Core;
using Horse.Mq;
using Horse.Mq.Clients;
using Horse.Protocols.Hmq;

namespace Horse.Jockey.Handlers.Queues
{
    public class DirectMessageHandler : IDirectMessageHandler
    {
        private readonly MessageCounter _counter;

        public DirectMessageHandler(MessageCounter counter)
        {
            _counter = counter;
        }

        public Task OnDirect(MqClient sender, HorseMessage message, List<MqClient> receivers)
        {
            _counter.AddDirectMessage();

            if (receivers.Count > 0)
                _counter.AddDirectDelivery(receivers.Count);

            return Task.CompletedTask;
        }

        public Task OnNotFound(MqClient sender, HorseMessage message)
        {
            _counter.AddDirectNotFound();
            return Task.CompletedTask;
        }

        public Task OnResponse(MqClient sender, HorseMessage message, MqClient receiver)
        {
            _counter.AddDirectResponse();
            return Task.CompletedTask;
        }
    }
}
using System.Threading.Tasks;
using Horse.Mq;
using Horse.Mq.Clients;

namespace Horse.Jockey.Handlers
{
    public class ClientHandler : BaseHandler, IClientHandler
    {
        public async Task Connected(HorseMq server, MqClient client)
        {
            throw new System.NotImplementedException();
        }

        public async Task Disconnected(HorseMq server, MqClient client)
        {
            throw new System.NotImplementedException();
        }
    }
}
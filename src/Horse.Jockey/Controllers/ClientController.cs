using System.Collections.Generic;
using System.Linq;
using System.Net;
using Horse.Jockey.Core;
using Horse.Jockey.Helpers;
using Horse.Jockey.Models;
using Horse.Jockey.Models.Clients;
using Horse.Messaging.Server;
using Horse.Messaging.Server.Clients;
using Horse.Mvc;
using Horse.Mvc.Auth;
using Horse.Mvc.Controllers;
using Horse.Mvc.Controllers.Parameters;
using Horse.Mvc.Filters.Route;
using Horse.Mvc.Results;

namespace Horse.Jockey.Controllers
{
    [Authorize]
    [Route("api/client")]
    public class ClientController : HorseController
    {
        private readonly HorseRider _rider;
        private readonly MessageCounter _counter;

        public ClientController(HorseRider rider, MessageCounter counter)
        {
            _rider = rider;
            _counter = counter;
        }

        [HttpGet("list")]
        public IActionResult List()
        {
            return Json(_rider.Client.Clients.Select(x => new ClientInfo
                {
                    Name = x.Name,
                    Type = x.Type,
                    ConnectedDate = x.ConnectedDate.ToUnixSeconds(),
                    IP = x.RemoteHost,
                    IsAuthenticated = x.IsAuthenticated,
                    UniqueId = x.UniqueId,
                    Protocol = x.SwitchingProtocol?.ProtocolName ?? "horse"
                })
                .OrderBy(x => x.Type)
                .ThenBy(x => x.Name)
                .ThenBy(x => x.UniqueId)
                .ToList());
        }

        [HttpGet("get")]
        public IActionResult Get([FromQuery] string id)
        {
            MessagingClient client = _rider.Client.Find(id);
            if (client == null)
                return new StatusCodeResult(HttpStatusCode.NotFound);

            return Json(new
            {
                id = client.UniqueId,
                name = client.Name,
                type = client.Type,
                connectedDate = client.ConnectedDate.ToUnixSeconds(),
                stats = new
                {
                    cacheGet = client.Stats.CacheGets,
                    cacheSet = client.Stats.CacheSets,
                    channelPublish = client.Stats.ChannelPublishes,
                    routerPublish = client.Stats.RouterPublishes,
                    directReceive = client.Stats.ReceivedDirectMessages,
                    directSend = client.Stats.SentDirectMessages,
                    queuePush = client.Stats.QueuePushes
                },
                queues = client.GetQueues().Select(x => new
                {
                    name = x.Queue.Name,
                    subscribedAt = x.JoinDate.ToUnixSeconds()
                }),
                channels = client.GetChannels().Select(x => new
                {
                    name = x.Channel.Name,
                    subscribedAt = x.SubscribedAt.ToUnixSeconds()
                })
            });
        }

        [HttpGet("graph")]
        public IActionResult GetGraph([FromQuery] string name, [FromQuery] string resolution)
        {
            CountableObject countable = _counter.GetDirectCounter(name);
            IEnumerable<MessageCount> counts = countable.GetDataByResolution(resolution);

            var model = new MessageCountModel
            {
                Name = countable.Name,
                Resolution = resolution,
                Data = counts.Select(x => new CountRecord(x.UnixTime, x.Received, x.Sent, x.Respond, x.Error, x.Delivered, x.NotRouted, x.Timeout))
            };

            return Json(model);
        }
    }
}
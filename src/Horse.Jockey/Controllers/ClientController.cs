using System.Collections.Generic;
using System.Linq;
using Horse.Jockey.Core;
using Horse.Jockey.Helpers;
using Horse.Jockey.Models;
using Horse.Jockey.Models.Clients;
using Horse.Messaging.Server;
using Horse.Messaging.Server.Clients;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Horse.Jockey.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/client")]
    public class ClientController(HorseRider rider, MessageCounter counter) : ControllerBase
    {
        [HttpGet("list")]
        public IActionResult List()
        {
            return Ok(rider.Client.Clients.Select(x => new ClientInfo
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
            MessagingClient client = rider.Client.Find(id);
            if (client == null)
                return NotFound();

            return Ok(new
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
        public IActionResult GetGraph([FromQuery] string name)
        {
            CountableObject countable = counter.GetDirectCounter(name);
            IEnumerable<MessageCount> counts = countable.GetData();

            var model = new MessageCountModel
            {
                Name = countable.Name,
                Data = counts.Select(x => new CountRecord(x.UnixTime, x.Received, x.Sent, x.Respond, x.Error, x.Delivered, x.NotRouted, x.Timeout))
            };

            return Ok(model);
        }
    }
}
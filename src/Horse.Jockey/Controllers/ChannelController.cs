using System.Collections.Generic;
using Horse.Jockey.Helpers;
using Horse.Jockey.Models;
using Horse.Messaging.Server;
using Horse.Messaging.Server.Channels;
using Horse.Mvc;
using Horse.Mvc.Auth;
using Horse.Mvc.Controllers;
using Horse.Mvc.Filters.Route;

namespace Horse.Jockey.Controllers
{
    [Authorize]
    [Route("api/channel")]
    public class ChannelController : HorseController
    {
        private readonly HorseRider _rider;

        public ChannelController(HorseRider rider)
        {
            _rider = rider;
        }

        [HttpGet("list")]
        public IActionResult List()
        {
            List<ChannelInfo> result = new List<ChannelInfo>();

            foreach (HorseChannel channel in _rider.Channel.Channels)
            {
                result.Add(new ChannelInfo
                {
                    Name = channel.Name,
                    SubscriberCount = channel.ClientsCount(),
                    Status = channel.Status.ToString(),
                    Topic = channel.Topic,
                    LastPublishDate = channel.LastPublishDate.ToUnixSeconds(),
                    Publish = channel.Info.Published,
                    Receive = channel.Info.Received
                });
            }

            return Json(result);
        }
    }
}
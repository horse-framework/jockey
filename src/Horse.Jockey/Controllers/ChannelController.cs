using System.Collections.Generic;
using System.Net;
using System.Threading.Tasks;
using Horse.Jockey.Helpers;
using Horse.Jockey.Models;
using Horse.Messaging.Protocol;
using Horse.Messaging.Server;
using Horse.Messaging.Server.Channels;
using Horse.Mvc;
using Horse.Mvc.Auth;
using Horse.Mvc.Controllers;
using Horse.Mvc.Controllers.Parameters;
using Horse.Mvc.Filters.Route;
using Horse.Mvc.Results;

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
                    Receive = channel.Info.Received,
                    HasInitialMessage = channel.GetInitialMessage() != null
                });
            }

            return Json(result);
        }

        [HttpGet("initial-message")]
        public async Task<IActionResult> GetInitialMessage([FromQuery] string name)
        {
            HorseChannel channel = _rider.Channel.Find(name);
            HorseMessage message = await channel.GetInitialMessage();

            if (message == null)
                return new StatusCodeResult(HttpStatusCode.NotFound);

            HorseMessageModel model = new HorseMessageModel
            {
                Id = message.MessageId,
                Source = message.Source,
                Target = message.Target,
                Type = message.Type.ToString(),
                HighPriority = message.HighPriority,
                WaitForResponse = message.WaitResponse,
                ContentType = message.ContentType,
                Headers = message.Headers,
                Content = message.GetStringContent()
            };

            return Json(model);
        }

        [HttpPost("create")]
        public async Task<IActionResult> Create([FromBody] CreateChannelModel model)
        {
            HorseChannel channel = await _rider.Channel.Create(model.Name, opt =>
            {
                opt.AutoDestroy = true;
                opt.ClientLimit = 0;
                opt.MessageSizeLimit = 0;
                opt.AutoDestroyIdleSeconds = 5;
                opt.SendLastMessageAsInitial = true;
            });

            if (!string.IsNullOrEmpty(model.Topic))
                channel.Topic = model.Topic;
            
            return Json(new {created = channel != null});
        }

        [HttpDelete("delete")]
        public IActionResult Delete([FromQuery] string name)
        {
            _rider.Channel.Remove(name);
            return new StatusCodeResult(HttpStatusCode.OK);
        }

        [HttpPut("reset-stats")]
        public IActionResult ResetStats([FromQuery] string channelName)
        {
            if (string.IsNullOrEmpty(channelName))
            {
                foreach (HorseChannel channel in _rider.Channel.Channels)
                {
                    channel.Info.Published = 0;
                    channel.Info.Received = 0;
                }
            }
            else
            {
                HorseChannel channel = _rider.Channel.Find(channelName);
                if (channel != null)
                {
                    channel.Info.Published = 0;
                    channel.Info.Received = 0;
                }
            }

            return new StatusCodeResult(HttpStatusCode.OK);
        }
    }
}
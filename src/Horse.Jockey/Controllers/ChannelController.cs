using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Horse.Jockey.Core;
using Horse.Jockey.Helpers;
using Horse.Jockey.Models;
using Horse.Jockey.Models.Channels;
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
    internal class ChannelController : HorseController
    {
        private readonly HorseRider _rider;
        private readonly MessageCounter _counter;

        public ChannelController(HorseRider rider, MessageCounter counter)
        {
            _rider = rider;
            _counter = counter;
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

        [HttpGet("get")]
        public IActionResult Get([FromQuery] string name)
        {
            HorseChannel channel = _rider.Channel.Find(name);
            if (channel == null)
                return new StatusCodeResult(HttpStatusCode.NotFound);

            ChannelDetail detail = new ChannelDetail
            {
                Name = channel.Name,
                SubscriberCount = channel.Info.SubscriberCount,
                HasInitialMessage = channel.GetInitialMessage() != null,
                LastPublishDate = channel.LastPublishDate > DateTime.UnixEpoch ? channel.LastPublishDate.ToUnixSeconds() : 0,
                Publish = channel.Info.Published,
                Receive = channel.Info.Received,
                Status = channel.Status.ToString(),
                Topic = channel.Topic,
                Options = new ChannelOptionsModel
                {
                    AutoDestroy = channel.Options.AutoDestroy,
                    ClientLimit = channel.Options.ClientLimit,
                    MessageSizeLimit = channel.Options.MessageSizeLimit,
                    AutoDestroyIdleSeconds = channel.Options.AutoDestroyIdleSeconds
                },
                Subscribers = channel.Clients.Select(x => new ChannelSubscriberModel
                {
                    Id = x.Client.UniqueId,
                    Name = x.Client.Name,
                    Type = x.Client.Type,
                    SubscriptionDate = x.SubscribedAt.ToUnixSeconds()
                })
            };

            return Json(detail);
        }

        [HttpGet("graph")]
        public IActionResult GetGraph([FromQuery] string name, [FromQuery] string resolution)
        {
            CountableObject countable = _counter.GetChannelCounter(name);
            IEnumerable<MessageCount> counts = countable.GetDataByResolution(resolution);

            var model = new MessageCountModel
            {
                Name = countable.Name,
                Resolution = resolution,
                Data = counts.Select(x => new CountRecord(x.UnixTime, x.Received, x.Sent, x.Respond, x.Error, x.Delivered, x.NotRouted, x.Timeout))
            };

            return Json(model);
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
                opt.AutoDestroy = model.AutoDestroy;
                opt.ClientLimit = model.ClientLimit;
                opt.MessageSizeLimit = model.MessageSizeLimit;
                opt.AutoDestroyIdleSeconds = model.AutoDestroyIdleSeconds;
                opt.SendLastMessageAsInitial = model.SendLastMessageAsInitial;
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
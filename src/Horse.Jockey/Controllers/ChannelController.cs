using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Horse.Jockey.Core;
using Horse.Jockey.Helpers;
using Horse.Jockey.Models;
using Horse.Jockey.Models.Channels;
using Horse.Jockey.Models.Queues;
using Horse.Messaging.Protocol;
using Horse.Messaging.Server;
using Horse.Messaging.Server.Channels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Horse.Jockey.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/channel")]
    public class ChannelController(HorseRider rider, MessageCounter counter) : ControllerBase
    {
        [HttpGet("list")]
        public IActionResult List()
        {
            List<ChannelInfo> result = new List<ChannelInfo>();

            foreach (HorseChannel channel in rider.Channel.Channels)
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

            return Ok(result);
        }

        [HttpGet("get")]
        public IActionResult Get([FromQuery] string name)
        {
            HorseChannel channel = rider.Channel.Find(name);
            if (channel == null)
                return NotFound();

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

            return Ok(detail);
        }

        [HttpGet("graph")]
        public IActionResult GetGraph([FromQuery] string name)
        {
            CountableObject countable = counter.GetChannelCounter(name);
            IEnumerable<MessageCount> counts = countable.GetData();

            var model = new MessageCountModel
            {
                Name = countable.Name,
                Data = counts.Select(x => new CountRecord(x.UnixTime, x.Received, x.Sent, x.Respond, x.Error, x.Delivered, x.NotRouted, x.Timeout))
            };

            return Ok(model);
        }

        [HttpGet("initial-message")]
        public async Task<IActionResult> GetInitialMessage([FromQuery] string name)
        {
            HorseChannel channel = rider.Channel.Find(name);
            HorseMessage message = await channel.GetInitialMessage();

            if (message == null)
                return NotFound();

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

            return Ok(model);
        }

        [HttpPost("create")]
        public async Task<IActionResult> Create([FromBody] CreateChannelModel model)
        {
            HorseChannel channel = await rider.Channel.Create(model.Name, opt =>
            {
                opt.AutoDestroy = model.AutoDestroy;
                opt.ClientLimit = model.ClientLimit;
                opt.MessageSizeLimit = model.MessageSizeLimit;
                opt.AutoDestroyIdleSeconds = model.AutoDestroyIdleSeconds;
                opt.SendLastMessageAsInitial = model.SendLastMessageAsInitial;
            });

            if (!string.IsNullOrEmpty(model.Topic))
                channel.Topic = model.Topic;

            return Ok(new { created = channel != null });
        }

        [HttpDelete("delete")]
        public IActionResult Delete([FromQuery] string name)
        {
            rider.Channel.Remove(name);
            return Ok();
        }

        [HttpPut("reset-stats")]
        public IActionResult ResetStats([FromQuery] string channelName)
        {
            if (string.IsNullOrEmpty(channelName))
            {
                foreach (HorseChannel channel in rider.Channel.Channels)
                {
                    channel.Info.Published = 0;
                    channel.Info.Received = 0;
                }
            }
            else
            {
                HorseChannel channel = rider.Channel.Find(channelName);
                if (channel != null)
                {
                    channel.Info.Published = 0;
                    channel.Info.Received = 0;
                }
            }

            return Ok();
        }

        [HttpPut("option")]
        public async Task<IActionResult> ChangeOption([FromBody] OptionChange model)
        {
            HorseChannel channel = rider.Channel.Find(model.Target);

            if (channel == null)
                return NotFound(new { ok = false, message = "Channel could not found" });

            switch (model.Name)
            {
                case "topic":
                    channel.Topic = model.Value;
                    break;

                case "clientLimit":
                    channel.Options.ClientLimit = Convert.ToInt32(model.Value);
                    break;

                case "messageSizeLimit":
                    channel.Options.MessageSizeLimit = Convert.ToUInt64(model.Value);
                    break;

                case "autoDestroy":
                    channel.Options.AutoDestroy = model.Value.Equals("true") || model.Value.Equals("1");
                    break;

                case "autoDestroyIdleSeconds":
                    channel.Options.AutoDestroyIdleSeconds = Convert.ToInt32(model.Value);
                    break;
            }

            return Ok(new { ok = channel != null });
        }
    }
}
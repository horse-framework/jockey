using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Horse.Jockey.Core;
using Horse.Jockey.Helpers;
using Horse.Jockey.Models;
using Horse.Jockey.Models.Queues;
using Horse.Jockey.Models.Routers;
using Horse.Messaging.Protocol;
using Horse.Messaging.Server;
using Horse.Messaging.Server.Routing;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Horse.Jockey.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/router")]
    public class RouterController(HorseRider rider, MessageCounter counter) : ControllerBase
    {
        [HttpGet("list")]
        public IActionResult List()
        {
            return Ok(rider.Router.Routers.Select(x => new RouterInfo
                {
                    Name = x.Name,
                    IsEnabled = x.IsEnabled,
                    Method = x.Method.ToString(),
                    Bindings = x.GetBindings()
                        .Select(y => new BindingInfo
                        {
                            Name = y.Name,
                            Interaction = y.Interaction.ToString(),
                            Type = y.GetType().ToBindingString(),
                            Priority = y.Priority,
                            Target = y.Target,
                            ContentType = y.ContentType
                        })
                })
                .ToList());
        }

        [HttpGet("get")]
        public IActionResult Get([FromQuery] string name)
        {
            Router router = rider.Router.Find(name);
            return Ok(new RouterInfo
            {
                Name = router.Name,
                IsEnabled = router.IsEnabled,
                Method = router.Method.ToString(),
                Bindings = router.GetBindings()
                    .Select(y => new BindingInfo
                    {
                        Name = y.Name,
                        Interaction = y.Interaction.ToString(),
                        Type = y.GetType().ToBindingString(),
                        Priority = y.Priority,
                        Target = y.Target,
                        ContentType = y.ContentType
                    })
            });
        }

        [HttpGet("graph")]
        public IActionResult GetGraph([FromQuery] string name)
        {
            CountableObject countable = counter.GetRouterCounter(name);
            IEnumerable<MessageCount> counts = countable.GetData();

            var model = new MessageCountModel
            {
                Name = countable.Name,
                Data = counts.Select(x => new CountRecord(x.UnixTime, x.Received, x.Sent, x.Respond, x.Error, x.Delivered, x.NotRouted, x.Timeout))
            };

            return Ok(model);
        }

        [HttpPost("create")]
        public IActionResult Create([FromBody] CreateRouterModel model)
        {
            RouteMethod method = Enum.Parse<RouteMethod>(model.Method);
            Router router = rider.Router.Add(model.Name, method);

            if (router == null)
                return NotFound(null);

            return Ok(new { ok = true });
        }

        [HttpDelete("remove")]
        public IActionResult Remove([FromQuery] string name)
        {
            Router router = rider.Router.Find(name);
            if (router == null)
                return NotFound(null);

            rider.Router.Remove(router);
            return Ok(new { ok = true });
        }

        [HttpPost("binding")]
        public IActionResult AddBinding([FromBody] AddBindingModel model)
        {
            Router router = rider.Router.Find(model.Router);

            if (router == null)
                return NotFound(null);

            BindingInteraction interaction = string.IsNullOrEmpty(model.Interaction) ? BindingInteraction.None : Enum.Parse<BindingInteraction>(model.Interaction);
            RouteMethod method = string.IsNullOrEmpty(model.Method) ? RouteMethod.Distribute : Enum.Parse<RouteMethod>(model.Method);

            string bindingType = model.Type;
            if (bindingType.Equals("custom", StringComparison.InvariantCultureIgnoreCase))
            {
                bindingType = model.CustomBindingType;
            }
            else
            {
                if (bindingType.IndexOf('.') < 0)
                    bindingType = "Horse.Messaging.Server.Routing." + bindingType;
            }

            Type type = Type.GetType(bindingType);
            if (type == null)
                type = Type.GetType($"{bindingType}, Horse.Messaging.Server");

            if (type == null && !bindingType.EndsWith("Binding"))
                type = Type.GetType($"{bindingType}Binding");

            if (type == null)
                type = Type.GetType($"{bindingType}, Horse.Messaging.Server");

            Binding binding = (Binding)Activator.CreateInstance(type);
            if (binding == null)
                return BadRequest(new { error = "Invalid Binding Type" });

            binding.Name = model.Name;
            binding.Target = model.Target;
            binding.Priority = model.Priority;
            binding.Interaction = interaction;
            binding.RouteMethod = method;

            bool added = router.AddBinding(binding);

            return Ok(new { ok = added });
        }

        [HttpDelete("binding")]
        public IActionResult RemoveBinding([FromQuery] string routerName, [FromQuery] string bindingName)
        {
            Router router = rider.Router.Find(routerName);

            if (router == null)
                return NotFound(null);

            bool hasBinding = router.GetBindings().Any(x => x.Name == bindingName);

            if (!hasBinding)
                return NotFound(null);

            router.RemoveBinding(bindingName);
            return Ok(new { ok = true });
        }

        [HttpPost("publish")]
        public async Task<IActionResult> Publish([FromBody] QueuePushModel model)
        {
            Router router = rider.Router.Find(model.Queue);

            if (router == null)
                return NotFound(new { result = "NotFound" });

            HorseMessage message = new HorseMessage(MessageType.Router, model.Queue, model.ContentType);
            message.HighPriority = model.Priority;
            message.SetMessageId(model.Id);

            foreach (QueueHeaderModel header in model.Headers)
                message.AddHeader(header.Name, header.Value);

            message.SetStringContent(model.Message);

            RouterPublishResult result = await router.Publish(null, message);
            return Ok(new { result = result.ToString() });
        }
    }
}
using System;
using System.Linq;
using System.Threading.Tasks;
using Horse.Jockey.Helpers;
using Horse.Jockey.Models;
using Horse.Jockey.Models.Queues;
using Horse.Jockey.Models.Routers;
using Horse.Messaging.Protocol;
using Horse.Messaging.Server;
using Horse.Messaging.Server.Queues;
using Horse.Messaging.Server.Routing;
using Horse.Mvc;
using Horse.Mvc.Auth;
using Horse.Mvc.Controllers;
using Horse.Mvc.Controllers.Parameters;
using Horse.Mvc.Filters.Route;

namespace Horse.Jockey.Controllers
{
    [Authorize]
    [Route("api/router")]
    internal class RouterController : HorseController
    {
        private readonly HorseRider _rider;

        public RouterController(HorseRider rider)
        {
            _rider = rider;
        }

        [HttpGet("list")]
        public IActionResult List()
        {
            return Json(_rider.Router.Routers.Select(x => new RouterInfo
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
            IRouter router = _rider.Router.Find(name);
            return Json(new RouterInfo
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

        [HttpPost("create")]
        public Task<IActionResult> Create([FromBody] CreateRouterModel model)
        {
            RouteMethod method = Enum.Parse<RouteMethod>(model.Method);
            IRouter router = _rider.Router.Add(model.Name, method);

            if (router == null)
                return NotFound(null);

            return JsonAsync(new {ok = true});
        }

        [HttpDelete("remove")]
        public Task<IActionResult> Remove([FromQuery] string name)
        {
            IRouter router = _rider.Router.Find(name);
            if (router == null)
                return NotFound(null);

            _rider.Router.Remove(router);
            return JsonAsync(new {ok = true});
        }

        [HttpPost("binding")]
        public Task<IActionResult> AddBinding([FromBody] AddBindingModel model)
        {
            IRouter router = _rider.Router.Find(model.Router);

            if (router == null)
                return NotFound(null);

            BindingInteraction interaction = Enum.Parse<BindingInteraction>(model.Interaction);
            Binding binding = null;

            switch (model.Type)
            {
                case "queue":
                    binding = new QueueBinding(model.Name, model.Target, model.Priority, interaction);
                    break;

                case "dynamic":
                    binding = new DynamicQueueBinding(model.Name, model.Priority, interaction);
                    break;

                case "topic":
                    RouteMethod topicMethod = !string.IsNullOrEmpty(model.Method) ? Enum.Parse<RouteMethod>(model.Method) : RouteMethod.Distribute;
                    binding = new TopicBinding(model.Name, model.Target, model.ContentType, model.Priority, interaction, topicMethod);
                    break;

                case "direct":
                    RouteMethod directMethod = !string.IsNullOrEmpty(model.Method) ? Enum.Parse<RouteMethod>(model.Method) : RouteMethod.Distribute;
                    binding = new DirectBinding(model.Name, model.Target, model.ContentType, model.Priority, interaction, directMethod);
                    break;

                case "http":
                    HttpBindingMethod httpMethod = Enum.Parse<HttpBindingMethod>(model.Method);
                    binding = new HttpBinding(model.Name, model.Target, httpMethod, model.Priority, interaction);
                    break;
            }

            if (binding == null)
                return BadRequest(new {error = "Invalid Binding Type"});

            bool added = router.AddBinding(binding);

            return JsonAsync(new {ok = added});
        }

        [HttpDelete("binding")]
        public Task<IActionResult> RemoveBinding([FromQuery] string routerName, [FromQuery] string bindingName)
        {
            IRouter router = _rider.Router.Find(routerName);

            if (router == null)
                return NotFound(null);

            bool hasBinding = router.GetBindings().Any(x => x.Name == bindingName);

            if (!hasBinding)
                return NotFound(null);

            router.RemoveBinding(bindingName);
            return JsonAsync(new {ok = true});
        }

        [HttpPost("publish")]
        public async Task<IActionResult> Publish([FromBody] QueuePushModel model)
        {
            IRouter router = _rider.Router.Find(model.Queue);

            if (router == null)
                return await NotFound(new {result = "NotFound"});

            HorseMessage message = new HorseMessage(MessageType.Router, model.Queue, model.ContentType);
            message.HighPriority = model.Priority;
            message.SetMessageId(model.Id);

            foreach (QueueHeaderModel header in model.Headers)
                message.AddHeader(header.Name, header.Value);

            message.SetStringContent(model.Message);

            RouterPublishResult result = await router.Publish(null, message);
            return Json(new {result = result.ToString()});
        }
    }
}
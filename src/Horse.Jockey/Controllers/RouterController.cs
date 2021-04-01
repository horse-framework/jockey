using System.Linq;
using Horse.Jockey.Models;
using Horse.Mq;
using Horse.Mvc;
using Horse.Mvc.Auth;
using Horse.Mvc.Controllers;
using Horse.Mvc.Filters.Route;

namespace Horse.Jockey.Controllers
{
    [Authorize]
    [Route("api/router")]
    internal class RouterController : HorseController
    {
        private readonly HorseMq _mq;

        public RouterController(HorseMq mq)
        {
            _mq = mq;
        }

        [HttpGet("list")]
        public IActionResult List()
        {
            return Json(_mq.Routers.Select(x => new RouterInfo
                                                {
                                                    Name = x.Name,
                                                    IsEnabled = x.IsEnabled,
                                                    Bindings = x.GetBindings().Select(y => new BindingInfo
                                                                                           {
                                                                                               Name = y.Name,
                                                                                               Interaction = y.Interaction.ToString(),
                                                                                               Priority = y.Priority,
                                                                                               Target = y.Target,
                                                                                               ContentType = y.ContentType
                                                                                           })
                                                }).ToList());
        }
    }
}
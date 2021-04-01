using System.Linq;
using Horse.Jockey.Helpers;
using Horse.Jockey.Models.Clients;
using Horse.Mq;
using Horse.Mvc;
using Horse.Mvc.Auth;
using Horse.Mvc.Controllers;
using Horse.Mvc.Filters.Route;

namespace Horse.Jockey.Controllers
{
    [Authorize]
    [Route("api/client")]
    internal class ClientController : HorseController
    {
        private readonly HorseMq _mq;

        public ClientController(HorseMq mq)
        {
            _mq = mq;
        }

        [HttpGet("list")]
        public IActionResult List()
        {
            return Json(_mq.Clients.Select(x => new ClientInfo
                                                {
                                                    Name = x.Name,
                                                    Type = x.Type,
                                                    ConnectedDate = x.ConnectedDate.ToUnixSeconds(),
                                                    IP = x.RemoteHost,
                                                    IsAuthenticated = x.IsAuthenticated,
                                                    UniqueId = x.UniqueId
                                                }).ToList());
        }
    }
}
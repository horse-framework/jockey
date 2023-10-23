using System.Linq;
using Horse.Jockey.Helpers;
using Horse.Jockey.Models.Clients;
using Horse.Messaging.Server;
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
        private readonly HorseRider _rider;

        public ClientController(HorseRider rider)
        {
            _rider = rider;
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
    }
}
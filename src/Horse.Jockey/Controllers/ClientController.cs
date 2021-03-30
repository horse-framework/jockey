using System;
using System.Collections.Generic;
using System.Linq;
using Horse.Core;
using Horse.Jockey.Helpers;
using Horse.Jockey.Models.Clients;
using Horse.Mq;
using Horse.Mq.Client.Annotations;
using Horse.Mvc;
using Horse.Mvc.Controllers;
using Horse.Mvc.Filters.Route;
using Horse.Server.Containers;

namespace Horse.Jockey.Controllers
{
    //[Authorize]
    [Route("api/client")]
    public class ClientController : HorseController
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
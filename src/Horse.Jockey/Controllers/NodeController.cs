using System;
using System.Linq;
using Horse.Jockey.Models;
using Horse.Mq;
using Horse.Mvc;
using Horse.Mvc.Controllers;
using Horse.Mvc.Filters.Route;

namespace Horse.Jockey.Controllers
{
    //[Authorize]
    [Route("api/node")]
    public class NodeController : HorseController
    {
        private readonly HorseMq _mq;

        public NodeController(HorseMq mq)
        {
            _mq = mq;
        }

        [HttpGet("list")]
        public IActionResult List()
        {
            throw new NotImplementedException();
        }
    }
}
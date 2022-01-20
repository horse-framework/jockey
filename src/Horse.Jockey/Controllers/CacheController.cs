using System.Collections.Generic;
using Horse.Messaging.Protocol.Models;
using Horse.Messaging.Server;
using Horse.Mvc;
using Horse.Mvc.Auth;
using Horse.Mvc.Controllers;
using Horse.Mvc.Controllers.Parameters;
using Horse.Mvc.Filters.Route;

namespace Horse.Jockey.Controllers
{
    [Authorize]
    [Route("api/cache")]
    public class CacheController : HorseController
    {
        private readonly HorseRider _rider;

        public CacheController(HorseRider rider)
        {
            _rider = rider;
        }

        [HttpGet("list")]
        public IActionResult List()
        {
            List<CacheInformation> result = _rider.Cache.GetCacheKeys();
            return Json(result);
        }

        [HttpDelete("remove")]
        public IActionResult Remove([FromQuery] string key)
        {
            _rider.Cache.Remove(key);
            return Json(new {ok = true});
        }
    }
}
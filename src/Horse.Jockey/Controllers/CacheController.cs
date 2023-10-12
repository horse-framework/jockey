﻿using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Horse.Messaging.Protocol.Models;
using Horse.Messaging.Server;
using Horse.Messaging.Server.Cache;
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
        public async Task<IActionResult> List()
        {
            List<CacheInformation> result = await _rider.Cache.GetCacheKeys();
            return Json(result);
        }

        [HttpDelete("remove")]
        public async Task<IActionResult> Remove([FromQuery] string key)
        {
            await _rider.Cache.Remove(key);
            return Json(new {ok = true});
        }

        [HttpGet("get")]
        public async Task<IActionResult> Get([FromQuery] string key)
        {
            var result = await _rider.Cache.Get(key);
            string value = null;

            if (result.item != null)
                value = Encoding.UTF8.GetString(result.item.Value.ToArray());

            return Json(new {ok = result.item != null, key, value});
        }
    }
}
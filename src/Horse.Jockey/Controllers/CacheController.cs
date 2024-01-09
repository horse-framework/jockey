using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using Horse.Jockey.Helpers;
using Horse.Jockey.Models;
using Horse.Messaging.Protocol.Models;
using Horse.Messaging.Server;
using Horse.Messaging.Server.Cache;
using Horse.Mvc;
using Horse.Mvc.Auth;
using Horse.Mvc.Controllers;
using Horse.Mvc.Controllers.Parameters;
using Horse.Mvc.Filters.Route;
using Horse.Mvc.Results;

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
            return Json(result.Select(x => new CacheItemModel
            {
                Expiration = x.Expiration,
                WarnCount = x.WarnCount,
                WarningDate = x.WarningDate,
                Key = x.Key,
                Tags = x.Tags
            }));
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

            if (result.item == null)
                return new StatusCodeResult(HttpStatusCode.NotFound);

            return Json(new CacheItemModel
            {
                Expiration = result.item.Expiration.ToUnixSeconds(),
                WarnCount = result.item.ExpirationWarnCount,
                WarningDate = result.item.ExpirationWarning?.ToUnixSeconds() ?? 0,
                Key = result.item.Key,
                Tags = result.item.Tags,
                Value = value
            });
        }

        [HttpPost("create")]
        public async Task<IActionResult> Post([FromBody] SetCacheModel model)
        {
            TimeSpan? warning = model.ExpirationWarning > 0 ? TimeSpan.FromSeconds(model.ExpirationWarning) : null;
            CacheOperation result = await _rider.Cache.Set(model.Key,
                new MemoryStream(Encoding.UTF8.GetBytes(model.Content)),
                TimeSpan.FromSeconds(model.Duration),
                warning, model.Tags);

            return Json(new
            {
                ok = result.Result == CacheResult.Ok,
                code = result.Result
            });
        }
    }
}
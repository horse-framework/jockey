using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Horse.Jockey.Helpers;
using Horse.Jockey.Models;
using Horse.Messaging.Protocol.Models;
using Horse.Messaging.Server;
using Horse.Messaging.Server.Cache;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Horse.Jockey.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/cache")]
    public class CacheController(HorseRider rider) : ControllerBase
    {
        [HttpGet("list")]
        public async Task<IActionResult> List()
        {
            List<CacheInformation> result = await rider.Cache.GetCacheKeys();
            return Ok(result.Select(x => new CacheItemModel
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
            await rider.Cache.Remove(key);
            return Ok(new {ok = true});
        }

        [HttpGet("get")]
        public async Task<IActionResult> Get([FromQuery] string key)
        {
            var result = await rider.Cache.Get(key);
            string value = null;

            if (result.Item != null)
                value = Encoding.UTF8.GetString(result.Item.Value.ToArray());

            if (result.Item == null)
                return NotFound();

            return Ok(new CacheItemModel
            {
                Expiration = result.Item.Expiration.ToUnixSeconds(),
                WarnCount = result.Item.ExpirationWarnCount,
                WarningDate = result.Item.ExpirationWarning?.ToUnixSeconds() ?? 0,
                Key = result.Item.Key,
                Tags = result.Item.Tags,
                Value = value
            });
        }

        [HttpPost("create")]
        public async Task<IActionResult> Post([FromBody] SetCacheModel model)
        {
            TimeSpan? warning = model.ExpirationWarning > 0 ? TimeSpan.FromSeconds(model.ExpirationWarning) : null;
            CacheOperation result = await rider.Cache.Set(model.Key,
                new MemoryStream(Encoding.UTF8.GetBytes(model.Content)),
                TimeSpan.FromSeconds(model.Duration),
                warning, model.Tags);

            return Ok(new
            {
                ok = result.Result == CacheResult.Ok,
                code = result.Result
            });
        }
    }
}
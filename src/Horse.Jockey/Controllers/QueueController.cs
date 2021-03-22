using System.Collections.Generic;
using Horse.Jockey.Models;
using Horse.Mq;
using Horse.Mq.Queues;
using Horse.Mvc;
using Horse.Mvc.Auth;
using Horse.Mvc.Controllers;
using Horse.Mvc.Filters.Route;

namespace Horse.Jockey.Controllers
{
    [Authorize]
    [Route("api/queue")]
    public class QueueController : HorseController
    {
        private readonly HorseMq _mq;

        public QueueController(HorseMq mq)
        {
            _mq = mq;
        }

        [HttpGet("list")]
        public IActionResult List()
        {
            List<QueueDetail> result = new List<QueueDetail>();

            foreach (HorseQueue queue in _mq.Queues)
            {
                QueueDetail detail = new QueueDetail();
                detail.Info = HorseQueueInformation.Create(queue);
                detail.Stats = HorseQueueStatistics.Create(queue);
                result.Add(detail);
            }

            return Json(result);
        }
    }
}
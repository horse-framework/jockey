using System.Collections.Generic;
using System.Threading.Tasks;
using Horse.Jockey.Core;
using Horse.Jockey.Models.Queues;
using Horse.Mq;
using Horse.Mq.Queues;
using Horse.Mvc;
using Horse.Mvc.Auth;
using Horse.Mvc.Controllers;
using Horse.Mvc.Controllers.Parameters;
using Horse.Mvc.Filters.Route;

namespace Horse.Jockey.Controllers
{
    [Authorize]
    [Route("api/queue")]
    internal class QueueController : HorseController
    {
        private readonly HorseMq _mq;
        private readonly QueueWatcherContainer _watcherContainer;

        public QueueController(HorseMq mq, QueueWatcherContainer watcherContainer)
        {
            _mq = mq;
            _watcherContainer = watcherContainer;
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

        [HttpGet("get/{name}")]
        public Task<IActionResult> Get([FromRoute] string name)
        {
            HorseQueue queue = _mq.FindQueue(name);

            if (queue == null)
                return NotFound(null);

            QueueWatcher watcher = _watcherContainer.Get(queue.Name);

            QueueDetail detail = new QueueDetail();
            detail.Info = HorseQueueInformation.Create(queue);
            detail.Stats = HorseQueueStatistics.Create(queue);
            detail.Options = QueueOptionsInfo.Create(queue);
            detail.GraphData = watcher.GetGraphData();

            return JsonAsync(detail);
        }
    }
}
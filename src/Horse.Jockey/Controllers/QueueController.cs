using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Horse.Jockey.Core;
using Horse.Jockey.Models.Queues;
using Horse.Messaging.Server;
using Horse.Messaging.Server.Queues;
using Horse.Messaging.Server.Queues.Sync;
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
        private readonly HorseRider _rider;
        private readonly QueueWatcherContainer _watcherContainer;

        public QueueController(HorseRider rider, QueueWatcherContainer watcherContainer)
        {
            _rider = rider;
            _watcherContainer = watcherContainer;
        }

        [HttpGet("list")]
        public IActionResult List()
        {
            List<QueueDetail> result = _rider.Queue
                .Queues
                .Select(queue => new QueueDetail
                {
                    Info = HorseQueueInformation.Create(queue),
                    Stats = HorseQueueStatistics.Create(queue)
                })
                .ToList();

            return Json(result);
        }

        [HttpGet("get/{name}")]
        public Task<IActionResult> Get([FromRoute] string name)
        {
            HorseQueue queue = _rider.Queue.Find(name);

            if (queue == null)
                return NotFound(null);

            QueueWatcher watcher = _watcherContainer.Get(queue.Name);

            QueueDetail detail = new()
            {
                Info = HorseQueueInformation.Create(queue),
                Stats = HorseQueueStatistics.Create(queue),
                Options = QueueOptionsInfo.Create(queue),
                GraphData = watcher.GetGraphData()
            };

            return JsonAsync(detail);
        }

        [HttpPut("clear/{name}")]
        public Task<IActionResult> Clear([FromRoute] string name)
        {
            HorseQueue queue = _rider.Queue.Find(name);

            if (queue == null)
                return NotFound(null);

            queue.Manager.PriorityMessageStore.Clear();
            queue.Manager.MessageStore.Clear();
            return Ok(new {name = name, clear = true});
        }

        [HttpDelete("delete/{name}")]
        public async Task<IActionResult> Delete([FromRoute] string name)
        {
            HorseQueue queue = _rider.Queue.Find(name);

            if (queue == null)
                return await NotFound(null);

            await _rider.Queue.Remove(queue);
            return await Ok(new {name = name, ok = true});
        }

        [HttpPost("move-messages")]
        public async Task<IActionResult> MoveMessages([FromForm] string name, [FromForm] string target)
        {
            HorseQueue queue = _rider.Queue.Find(name);
            HorseQueue targetQueue = _rider.Queue.Find(target);

            if (queue == null || targetQueue == null)
                return await NotFound(null);

            int moveCount = 0;
            while (true)
            {
                QueueMessage message = queue.Manager.PriorityMessageStore.ConsumeFirst();
                if (message == null)
                    break;

                PushResult result = await targetQueue.Push(message.Message);
                if (result != PushResult.Success)
                    return await Ok(new {ok = true, completed = false, count = moveCount});

                moveCount++;
                queue.Manager.PriorityMessageStore.Remove(message);
            }

            while (true)
            {
                QueueMessage message = queue.Manager.MessageStore.ConsumeFirst();
                if (message == null)
                    break;

                PushResult result = await targetQueue.Push(message.Message);
                if (result != PushResult.Success)
                    return await Ok(new {ok = true, completed = false, count = moveCount});

                moveCount++;
                queue.Manager.MessageStore.Remove(message);
            }

            await queue.Manager.PriorityMessageStore.Clear();
            await queue.Manager.MessageStore.Clear();

            return await Ok(new {ok = true, completed = true, count = moveCount});
        }
    }
}
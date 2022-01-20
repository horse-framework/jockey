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

        [HttpGet("get")]
        public Task<IActionResult> Get([FromQuery] string name)
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

        [HttpGet("read")]
        public Task<IActionResult> Read([FromQuery] string name)
        {
            HorseQueue queue = _rider.Queue.Find(name);

            if (queue == null)
                return NotFound(null);

            QueueMessage msg = null;

            if (!queue.Manager.PriorityMessageStore.IsEmpty)
                msg = queue.Manager.PriorityMessageStore.ReadFirst();

            if (msg == null)
                msg = queue.Manager.MessageStore.ReadFirst();

            QueueMessageModel model = msg != null ? new QueueMessageModel(msg) : null;
            return JsonAsync(model);
        }

        [HttpGet("consume")]
        public Task<IActionResult> Consume([FromQuery] string name)
        {
            HorseQueue queue = _rider.Queue.Find(name);

            if (queue == null)
                return NotFound(null);

            QueueMessage msg = null;

            if (!queue.Manager.PriorityMessageStore.IsEmpty)
                msg = queue.Manager.PriorityMessageStore.ConsumeFirst();

            if (msg == null)
                msg = queue.Manager.MessageStore.ConsumeFirst();

            QueueMessageModel model = msg != null ? new QueueMessageModel(msg) : null;
            return JsonAsync(model);
        }

        [HttpPut("clear")]
        public Task<IActionResult> Clear([FromForm] string name)
        {
            HorseQueue queue = _rider.Queue.Find(name);

            if (queue == null)
                return NotFound(null);

            queue.Manager.PriorityMessageStore.Clear();
            queue.Manager.MessageStore.Clear();
            return Ok(new {name = name, clear = true});
        }

        [HttpPut("status")]
        public Task<IActionResult> SetStatus([FromForm] string name, [FromForm] string status)
        {
            HorseQueue queue = _rider.Queue.Find(name);
            if (queue == null)
                return NotFound(new {ok = false});

            QueueStatus queueStatus = Enum.Parse<QueueStatus>(status);
            if (queueStatus == QueueStatus.Syncing || queueStatus == QueueStatus.NotInitialized)
                return NotAcceptable(new {ok = false});

            queue.SetStatus(queueStatus);
            return Ok(new {name = name, ok = true});
        }

        [HttpDelete("delete")]
        public async Task<IActionResult> Delete([FromQuery] string name)
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
                await queue.Manager.RemoveMessage(message);
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
                await queue.Manager.RemoveMessage(message);
            }

            return await Ok(new {ok = true, completed = true, count = moveCount});
        }
    }
}
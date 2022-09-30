using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EnumsNET;
using Horse.Jockey.Core;
using Horse.Jockey.Models.Queues;
using Horse.Messaging.Protocol;
using Horse.Messaging.Server;
using Horse.Messaging.Server.Queues;
using Horse.Messaging.Server.Queues.Delivery;
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

        [HttpGet("list-names")]
        public IActionResult ListNames()
        {
            var result = _rider.Queue
                .Queues
                .Select(queue => new
                {
                    name = queue.Name,
                    type = queue.Type.AsString(EnumFormat.Description),
                    status = queue.Status.AsString(EnumFormat.Description)
                })
                .ToList();

            return Json(result);
        }

        [HttpGet("managers")]
        public IActionResult GetManagers()
        {
            string[] managers = _rider.Queue.GetQueueManagers();
            return Json(managers);
        }

        [HttpGet("get")]
        public Task<IActionResult> Get([FromQuery] string name)
        {
            HorseQueue queue = _rider.Queue.Find(name);

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

        [HttpPost("create")]
        public async Task<IActionResult> Create([FromBody] QueueCreateModel model)
        {
            HorseQueue queue = _rider.Queue.Find(model.Name);

            if (queue != null)
                return await NotFound(new {ok = false, message = "There is already a queue with same name"});

            queue = await _rider.Queue.Create(model.Name, o =>
            {
                if (!string.IsNullOrEmpty(model.CommitWhen))
                    o.CommitWhen = Enum.Parse<CommitWhen>(model.CommitWhen);

                if (!string.IsNullOrEmpty(model.Acknowledge))
                    o.Acknowledge = Enum.Parse<QueueAckDecision>(model.Acknowledge);

                if (!string.IsNullOrEmpty(model.Type))
                    o.Type = Enum.Parse<QueueType>(model.Type);

                if (!string.IsNullOrEmpty(model.AutoDestroy))
                    o.AutoDestroy = Enum.Parse<QueueDestroy>(model.AutoDestroy);

                if (!string.IsNullOrEmpty(model.PutBack))
                    o.PutBack = Enum.Parse<PutBackDecision>(model.PutBack);

                if (model.AcknowledgeTimeout.HasValue)
                    o.AcknowledgeTimeout = TimeSpan.FromMilliseconds(model.AcknowledgeTimeout.Value);

                if (model.MessageTimeout.HasValue)
                    o.MessageTimeout = TimeSpan.FromSeconds(model.MessageTimeout.Value);

                if (model.PutBackDelay.HasValue)
                    o.PutBackDelay = model.PutBackDelay.Value;

                if (model.DelayBetweenMessages.HasValue)
                    o.DelayBetweenMessages = model.DelayBetweenMessages.Value;

                if (model.ClientLimit.HasValue)
                    o.ClientLimit = model.ClientLimit.Value;

                if (model.MessageLimit.HasValue)
                    o.MessageLimit = model.MessageLimit.Value;

                if (model.MessageSizeLimit.HasValue)
                    o.MessageSizeLimit = model.MessageSizeLimit.Value;
            }, model.Manager);

            return Json(new {ok = queue != null});
        }

        [HttpPut("option")]
        public async Task<IActionResult> ChangeOption([FromBody] QueueOptionChange model)
        {
            HorseQueue queue = _rider.Queue.Find(model.Queue);

            if (queue == null)
                return await NotFound(new {ok = false, message = "There is already a queue with same name"});

            switch (model.Name)
            {
                case "ackTimeout":
                    queue.Options.AcknowledgeTimeout = TimeSpan.FromMilliseconds(Convert.ToInt32(model.Value));
                    break;

                case "autoDestroy":
                    queue.Options.AutoDestroy = Enum.Parse<QueueDestroy>(model.Value);
                    break;

                case "clientLimit":
                    queue.Options.ClientLimit = Convert.ToInt32(model.Value);
                    break;

                case "delayBetweenMsgs":
                    queue.Options.DelayBetweenMessages = Convert.ToInt32(model.Value);
                    break;

                case "msgLimit":
                    queue.Options.MessageLimit = Convert.ToInt32(model.Value);
                    break;

                case "msgSizeLimit":
                    queue.Options.MessageSizeLimit = Convert.ToUInt64(model.Value);
                    break;

                case "putBackDelay":
                    queue.Options.PutBackDelay = Convert.ToInt32(model.Value);
                    break;

                case "topic":
                    queue.Topic = model.Value;
                    break;
            }

            return Json(new {ok = queue != null});
        }

        [HttpPost("push")]
        public async Task<IActionResult> Push([FromBody] QueuePushModel model)
        {
            HorseQueue queue = _rider.Queue.Find(model.Queue);

            if (queue == null)
                return await NotFound(new {result = "NotFound"});

            HorseMessage message = new HorseMessage(MessageType.QueueMessage, queue.Name, model.ContentType);
            message.HighPriority = model.Priority;
            message.SetMessageId(model.Id);

            foreach (QueueHeaderModel header in model.Headers)
                message.AddHeader(header.Name, header.Value);

            message.SetStringContent(model.Message);

            PushResult result = await queue.Push(message);
            return Json(new {result = result.ToString()});
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

            queue.ClearPuttingBackMessages();
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

            List<QueueMessage> puttingBackMessages = queue.ClearPuttingBackMessages();
            foreach (QueueMessage message in puttingBackMessages)
            {
                PushResult result = await targetQueue.Push(message.Message);
                if (result != PushResult.Success)
                    return await Ok(new {ok = true, completed = false, count = moveCount});

                moveCount++;
            }

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
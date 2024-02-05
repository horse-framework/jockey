using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using EnumsNET;
using Horse.Jockey.Core;
using Horse.Jockey.Helpers;
using Horse.Jockey.Models;
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
using Horse.Mvc.Results;

namespace Horse.Jockey.Controllers
{
    [Authorize]
    [Route("api/queue")]
    public class QueueController : HorseController
    {
        private readonly HorseRider _rider;
        private readonly MessageCounter _counter;

        public QueueController(HorseRider rider, MessageCounter counter)
        {
            _rider = rider;
            _counter = counter;
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

            QueueDetail detail = new QueueDetail();
            detail.Info = HorseQueueInformation.Create(queue);
            detail.Stats = HorseQueueStatistics.Create(queue);
            detail.Options = QueueOptionsInfo.Create(queue);
            detail.Consumers = queue.ClientsClone
                .Select(x => new QueueConsumerInfo
                {
                    Id = x.Client?.UniqueId,
                    Type = x.Client?.Type,
                    Name = x.Client?.Name,
                    SubscriptionDate = x.JoinDate.ToUnixSeconds(),
                    CurrentlyProcessing = x.CurrentlyProcessing != null,
                    ProcessingDeadline = x.ProcessDeadline.ToUnixSeconds(),
                    ConsumeCount = x.ConsumeCount,
                    AcknowledgeCount = x.AcknowledgeCount,
                    AckTimeoutCount = x.AckTimeoutCount
                }).ToList();

            return JsonAsync(detail);
        }

        [HttpGet("graph")]
        public IActionResult GetGraph([FromQuery] string name)
        {
            CountableObject countable = _counter.GetQueueCounter(name);
            CountableObject storeCountable = _counter.GetQueueStoreCounter(name);
            IEnumerable<MessageCount> counts = countable.GetData();
            IEnumerable<MessageCount> storeCounts = storeCountable.GetData();

            return Json(new
            {
                name = countable.Name,
                stream = counts.Select(x => new CountRecord(x.UnixTime, x.Received, x.Sent, x.Respond, x.Error, x.Delivered, x.NotRouted, x.Timeout)),
                store = storeCounts.Select(x => new CountRecord(x.UnixTime, x.Received, x.Sent, x.Respond, x.Error, x.Delivered, x.NotRouted, x.Timeout))
            });
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

                if (model.MessageTimeout != null)
                    o.MessageTimeout = new MessageTimeoutStrategy
                    {
                        MessageDuration = model.MessageTimeout.duration,
                        Policy = Enums.Parse<MessageTimeoutPolicy>(model.MessageTimeout.policy),
                        TargetName = model.MessageTimeout.target
                    };

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
        public async Task<IActionResult> ChangeOption([FromBody] OptionChange model)
        {
            HorseQueue queue = _rider.Queue.Find(model.Target);

            if (queue == null)
                return await NotFound(new {ok = false, message = "Queue could not found"});

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
            QueueMessage msg = GetQueueMessage(name);
            QueueMessageModel model = msg != null ? new QueueMessageModel(msg) : null;
            return JsonAsync(model);
        }

        private QueueMessage GetQueueMessage(string name)
        {
            HorseQueue queue = _rider.Queue.Find(name);

            if (queue == null)
                return null;

            QueueMessage msg = null;

            if (!queue.Manager.PriorityMessageStore.IsEmpty)
                msg = queue.Manager.PriorityMessageStore.ReadFirst();

            if (msg == null)
                msg = queue.Manager.MessageStore.ReadFirst();

            return msg;
        }

        [HttpGet("consume")]
        public Task<IActionResult> Consume([FromQuery] string name)
        {
            HorseQueue queue = _rider.Queue.Find(name);
            QueueMessage msg = GetQueueMessage(name);

            if (msg != null)
                queue.RemoveMessage(msg);

            QueueMessageModel model = msg != null ? new QueueMessageModel(msg) : null;
            return JsonAsync(model);
        }

        [HttpPut("clear")]
        public Task<IActionResult> Clear([FromForm] string name)
        {
            HorseQueue queue = _rider.Queue.Find(name);

            if (queue == null)
                return NotFound(null);

            queue.ClearMessages();
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

            if (queue == null)
                return await NotFound(null);

            if (targetQueue == null)
                targetQueue = await _rider.Queue.Create(target);

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

        [HttpPost("copy-messages")]
        public async Task<IActionResult> CopyMessages([FromForm] string name, [FromForm] string target)
        {
            HorseQueue queue = _rider.Queue.Find(name);
            HorseQueue targetQueue = _rider.Queue.Find(target);

            if (queue == null)
                return await NotFound(null);

            if (targetQueue == null)
                targetQueue = await _rider.Queue.Create(target);

            int moveCount = 0;

            List<QueueMessage> puttingBackMessages = queue.GetPuttingBackMessages();
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
            }

            return await Ok(new {ok = true, completed = true, count = moveCount});
        }

        [HttpPut("reset-stats")]
        public IActionResult ResetStats([FromQuery] string queueName)
        {
            if (string.IsNullOrEmpty(queueName))
            {
                foreach (HorseQueue queue in _rider.Queue.Queues)
                    queue.Info.Reset();
            }
            else
            {
                HorseQueue queue = _rider.Queue.Find(queueName);
                queue?.Info.Reset();
            }

            return new StatusCodeResult(HttpStatusCode.OK);
        }
    }
}
using System;
using System.Collections.Generic;
using Horse.Jockey.Core;
using Horse.Jockey.Helpers;
using Horse.Jockey.Models;
using Horse.Jockey.Models.Queues;
using Horse.Mq;
using Horse.Mvc;
using Horse.Mvc.Auth;
using Horse.Mvc.Controllers;
using Horse.Mvc.Filters.Route;

namespace Horse.Jockey.Controllers
{
    [Authorize]
    [Route("api/dashboard")]
    internal class DashboardController : HorseController
    {
        private readonly HorseMq _mq;
        private readonly QueueWatcherContainer _watcherContainer;
        private readonly MessageCounter _messageCounter;

        public DashboardController(QueueWatcherContainer watcherContainer, HorseMq mq, MessageCounter messageCounter)
        {
            _watcherContainer = watcherContainer;
            _mq = mq;
            _messageCounter = messageCounter;
        }

        [HttpGet("statistics")]
        public IActionResult Statistics()
        {
            ServerStatistics serverStatistics = ServerStatistics.Create(_mq);
            HorseServerOptions serverOptions = HorseServerOptions.Create(_mq);
            DefaultQueueOptions queueOptions = DefaultQueueOptions.Create(_mq);

            MessageGraphData messageStatistics = new MessageGraphData
                                                 {
                                                     Date = DateTime.UtcNow.ToUnixSeconds(),
                                                     DirectDelivery = _messageCounter.DirectDelivery,
                                                     DirectMessage = _messageCounter.DirectMessage,
                                                     DirectResponse = _messageCounter.DirectResponse,
                                                     DirectNoReceiver = _messageCounter.DirectNoReceiver,
                                                     RouterPublish = _messageCounter.RouterPublish,
                                                     RouterNotFound = _messageCounter.RouterNotFound,
                                                     RouterOk = _messageCounter.RouterOk,
                                                     RouterFailed = _messageCounter.RouterFailed
                                                 };

            return Json(new
                        {
                            serverStatistics,
                            messageStatistics,
                            serverOptions,
                            queueOptions
                        });
        }

        [HttpGet("graph")]
        public IActionResult Graph()
        {
            List<QueueGraphData[]> dataList = new List<QueueGraphData[]>();

            IEnumerable<QueueWatcher> watchers = _watcherContainer.GetAll();
            foreach (QueueWatcher watcher in watchers)
            {
                QueueGraphData[] data = watcher.GetGraphData();
                dataList.Add(data);
            }

            List<QueueGraphData> list = new List<QueueGraphData>();

            if (dataList.Count == 0)
                return Json(list);

            int size = dataList[0].Length;
            for (int i = 0; i < size; i++)
            {
                QueueGraphData overall = new QueueGraphData();

                foreach (QueueGraphData[] array in dataList)
                {
                    if (size >= array.Length)
                        continue;

                    QueueGraphData data = array[size];

                    if (overall.Date == 0)
                        overall.Date = data.Date;

                    overall.Ack += data.Ack;
                    overall.Nack += data.Nack;
                    overall.Unack += data.Unack;
                    overall.Delivery += data.Delivery;
                    overall.Error += data.Error;
                    overall.Pending += data.Pending;
                    overall.Processing += data.Processing;
                    overall.Received += data.Received;
                    overall.Sent += data.Sent;
                    overall.Stored += data.Stored;
                    overall.Timeout += data.Timeout;
                    overall.StoredPrio += data.StoredPrio;
                }

                list.Add(overall);
            }

            return Json(list);
        }
    }
}
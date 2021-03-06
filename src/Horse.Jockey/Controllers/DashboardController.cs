using System;
using System.Collections.Generic;
using Horse.Jockey.Core;
using Horse.Jockey.Helpers;
using Horse.Jockey.Models;
using Horse.Jockey.Models.Queues;
using Horse.Messaging.Server;
using Horse.Messaging.Server.Queues;
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
		private readonly HorseRider _rider;
		private readonly QueueWatcherContainer _watcherContainer;
		private readonly MessageCounter _messageCounter;

		public DashboardController(QueueWatcherContainer watcherContainer, HorseRider rider, MessageCounter messageCounter)
		{
			_watcherContainer = watcherContainer;
			_rider = rider;
			_messageCounter = messageCounter;
		}

		[HttpGet("stats")]
		public IActionResult Stats()
		{
			ServerStatistics server = ServerStatistics.Create(_rider);
			HorseServerOptions serverOptions = HorseServerOptions.Create(_rider);
			QueueOptionsInfo queueOptionsInfo = QueueOptionsInfo.CreateDefault(_rider);

			QueueGraphData queueMessages = new QueueGraphData();
			foreach (HorseQueue queue in _rider.Queue.Queues)
			{
				queueMessages.Ack += queue.Info.Acknowledges;
				queueMessages.Delivery += queue.Info.Deliveries;
				queueMessages.Error += queue.Info.ErrorCount;
				queueMessages.Unack += queue.Info.Unacknowledges;
				queueMessages.Nack += queue.Info.NegativeAcknowledge;
				queueMessages.Pending += queue.GetAckPendingMessageCount();

				queueMessages.Received += queue.Info.ReceivedMessages;
				queueMessages.Sent += queue.Info.SentMessages;
				queueMessages.Stored += queue.MessageCount();
				queueMessages.StoredPrio += queue.PriorityMessageCount();
				queueMessages.Timeout += queue.Info.TimedOutMessages;

				if (queue.ProcessingMessage != null)
					queueMessages.Processing++;
			}

			MessageGraphData otherMessages = new MessageGraphData
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

			return Json(new { server, queueMessages, otherMessages, serverOptions, queueOptions = queueOptionsInfo });
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
					int padding = size - array.Length;
					int index = i - padding;
					if (index < 0 || index >= array.Length)
						continue;

					QueueGraphData data = array[index];

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

		[HttpGet("messages")]
		public IActionResult Messages()
		{
			return Json(_messageCounter.GetGraphData());
		}
	}
}
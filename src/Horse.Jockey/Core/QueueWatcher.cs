using System;
using System.Collections.Generic;
using System.Threading;
using Horse.Jockey.Helpers;
using Horse.Jockey.Models.Queues;
using Horse.Jockey.Models.Subscriptions;
using Horse.Messaging.Server.Queues;
using Horse.WebSocket.Models;
using Microsoft.Extensions.DependencyInjection;

namespace Horse.Jockey.Core
{
	internal class QueueWatcher
	{
		#region Properties

		private DateTime _lastInformationRefreshDate = DateTime.UtcNow.AddDays(-1);
		private readonly TimeSpan _informationRefreshment = TimeSpan.FromSeconds(60);
		private DateTime _lastActiveTime;
		private readonly JockeyOptions _options;
		private Timer _timer;
		private IWebSocketServerBus _bus;
		private SubscriptionService _subscriptionService;

		private const int GRAPH_DATA_SIZE = 60;
		private readonly Queue<QueueGraphData> _graphData = new(GRAPH_DATA_SIZE);

		public HorseQueue Queue { get; }
		public HorseQueueStatistics Statistics { get; private set; }
		public HorseQueueInformation Information { get; private set; }

		#endregion

		private IWebSocketServerBus GetBus()
		{
			if (_bus != null)
				return _bus;

			_bus = Hub.Provider.GetService<IWebSocketServerBus>();
			return _bus;
		}

		private SubscriptionService GetSubscriptionService()
		{
			if (_subscriptionService != null)
				return _subscriptionService;

			_subscriptionService = Hub.Provider.GetService<SubscriptionService>();
			return _subscriptionService;
		}

		public QueueWatcher(HorseQueue queue, JockeyOptions options)
		{
			Queue = queue;
			_options = options;
			_lastActiveTime = DateTime.UtcNow;
		}

		public QueueGraphData[] GetGraphData()
		{
			QueueGraphData[] array;
			lock (_graphData)
			{
				array = _graphData.ToArray();
			}

			return array;
		}

		public void Watch()
		{
			if (_timer != null)
				return;

			Refresh();
			_timer = new Timer(_ => Refresh(), null, 1000, 1000);
		}

		public void Destroy()
		{
			try
			{
				if (_timer != null)
					_timer.Dispose();
			}
			catch
			{
				// ignored
			}

			_timer = null;
		}

		private bool KeepData()
		{
			if (_options.StatisticsKeepAliveDuration == TimeSpan.Zero)
				return true;

			int onlineClients = Hub.Clients.Count();
			if (onlineClients > 0)
			{
				_lastActiveTime = DateTime.UtcNow;
				return true;
			}

			//there is no online admin on website, should we still keep stats data?

			if (_lastActiveTime + _options.StatisticsKeepAliveDuration > DateTime.UtcNow)
				return true;

			return false;
		}

		private void Refresh()
		{
			try
			{
				if (!KeepData())
				{
					lock (_graphData)
					{
						if (_graphData.Count > 0)
							_graphData.Clear();
					}

					return;
				}

				HorseQueueStatistics statistics = HorseQueueStatistics.Create(Queue);
				HorseQueueStatistics diff = GetStatsDiff(Statistics, statistics);
				Statistics = statistics;

				QueueGraphData graphData = new()
				{
					Date = DateTime.UtcNow.ToUnixSeconds(),
					Ack = diff.TotalAck,
					Delivery = diff.TotalDelivered,
					Error = diff.TotalErrors,
					Unack = diff.TotalUnack,
					Nack = diff.TotalNack,
					Pending = statistics.AckPendingMsgs,
					Processing = statistics.ProcessingMsgs,
					Received = diff.TotalReceived,
					Sent = diff.TotalSent,
					Stored = statistics.StoredMsgs,
					StoredPrio = statistics.StoredPrioMsgs,
					Timeout = diff.TotalTimedout
				};

				lock (_graphData)
				{
					_graphData.Enqueue(graphData);
					if (_graphData.Count >= GRAPH_DATA_SIZE)
						_graphData.Dequeue();
				}

				if (_lastInformationRefreshDate + _informationRefreshment < DateTime.UtcNow)
				{
					Information = HorseQueueInformation.Create(Queue);
					_lastInformationRefreshDate = DateTime.UtcNow;
				}

				IWebSocketServerBus bus = GetBus();
				SubscriptionService subscriptionService = GetSubscriptionService();
				IEnumerable<QueueDetailSubscription> subscribers = subscriptionService.FindQueueDetailSubscribers(Queue.Name);

				foreach (QueueDetailSubscription subs in subscribers)
					if (!subs.Client.IsConnected)
						subscriptionService.UnsubscribeQueueDetail(subs.Client);
					else
						_ = bus.SendAsync(subs.Client, graphData);
			}
			catch
			{
				// ignored
			}
		}

		private HorseQueueStatistics GetStatsDiff(HorseQueueStatistics before, HorseQueueStatistics after)
		{
			if (before == null)
				return after;

			return new HorseQueueStatistics
			{
				Consumers = after.Consumers - before.Consumers,
				Name = after.Name,
				LastReceived = after.LastReceived,
				LastSent = after.LastSent,
				ProcessingMsgs = after.ProcessingMsgs,
				StoredMsgs = after.StoredMsgs,
				StoredPrioMsgs = after.StoredPrioMsgs,
				TotalAck = after.TotalAck - before.TotalAck,
				TotalDelivered = after.TotalDelivered - before.TotalDelivered,
				TotalErrors = after.TotalErrors - before.TotalErrors,
				TotalNack = after.TotalNack - before.TotalNack,
				TotalReceived = after.TotalReceived - before.TotalReceived,
				TotalSent = after.TotalSent - before.TotalSent,
				TotalTimedout = after.TotalTimedout - before.TotalTimedout,
				TotalUnack = after.TotalUnack - before.TotalUnack,
				AckPendingMsgs = after.AckPendingMsgs
			};
		}
	}
}
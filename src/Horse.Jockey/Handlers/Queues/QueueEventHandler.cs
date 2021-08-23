using System.Threading.Tasks;
using Horse.Jockey.Core;
using Horse.Messaging.Server;
using Horse.Messaging.Server.Clients;
using Horse.Messaging.Server.Queues;
using Microsoft.Extensions.DependencyInjection;

namespace Horse.Jockey.Handlers.Queues
{
	internal class QueueEventHandler : BaseHandler, IQueueEventHandler
	{
		public Task OnCreated(HorseQueue queue)
		{
			QueueWatcherContainer watcherContainer = Hub.Provider.GetRequiredService<QueueWatcherContainer>();
			watcherContainer.Watch(queue);

			return Task.CompletedTask;
		}

		public Task OnRemoved(HorseQueue queue)
		{
			QueueWatcherContainer watcherContainer = Hub.Provider.GetRequiredService<QueueWatcherContainer>();
			QueueWatcher watcher = watcherContainer.Get(queue.Name);
			if (watcher != null)
				watcherContainer.Release(watcher);

			return Task.CompletedTask;
		}

		public Task OnConsumerSubscribed(QueueClient client)
		{
			return Task.CompletedTask;
		}

		public Task OnConsumerUnsubscribed(QueueClient client)
		{
			return Task.CompletedTask;
		}

		public Task OnStatusChanged(HorseQueue queue, QueueStatus from, QueueStatus to)
		{
			return Task.CompletedTask;
		}
	}
}
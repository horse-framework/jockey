using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Horse.Jockey.Core;
using Horse.Jockey.Helpers;
using Horse.Jockey.Models.Subscriptions;
using Horse.Jockey.Models.WebSockets;
using Horse.Messaging.Protocol;
using Horse.Messaging.Server;
using Horse.Messaging.Server.Clients;
using Horse.Messaging.Server.Routing;
using Horse.WebSocket.Server;
using Microsoft.Extensions.DependencyInjection;

namespace Horse.Jockey.Handlers.Queues
{
	internal class RouterMessageHandler : IRouterMessageHandler
	{
		private readonly MessageCounter _counter;
		private readonly SubscriptionService _subscriptionService;

		public RouterMessageHandler(MessageCounter counter, SubscriptionService subscriptionService)
		{
			_counter = counter;
			_subscriptionService = subscriptionService;
		}

		public Task OnRouterNotFound(MessagingClient sender, HorseMessage message)
		{
			_counter.AddRouterPublish();
			_counter.AddRouterNotFound();
			return Task.CompletedTask;
		}

		public Task OnNotRouted(MessagingClient sender, Router router, HorseMessage message)
		{
			_counter.AddRouterPublish();
			_counter.AddRouterFailed();
			SendToConsole(router, message, "Not Routed");
			return Task.CompletedTask;
		}

		public Task OnRouted(MessagingClient sender, Router router, HorseMessage message)
		{
			_counter.AddRouterPublish();
			_counter.AddRouterOk();
			SendToConsole(router, message, "Routed");
			return Task.CompletedTask;
		}

		private void SendToConsole(Router router, HorseMessage message, string status)
		{
			IEnumerable<ConsoleSubscription> subscriptions = _subscriptionService.FindConsoleSubscribers(router).ToList();
			if (!subscriptions.Any()) return;
			IWebSocketServerBus bus = Hub.Provider.GetRequiredService<IWebSocketServerBus>();
			ConsoleMessage consoleMessage = new()
			{
				Date = DateTime.UtcNow.ToUnixSeconds(),
				Name = router.Name,
				ContentType = message.ContentType,
				MessageId = message.MessageId,
				Message = message.GetStringContent(),
				Status = status
			};

			foreach (ConsoleSubscription subscription in subscriptions)
				_ = bus.SendAsync(subscription.Client, consoleMessage);
		}
	}
}
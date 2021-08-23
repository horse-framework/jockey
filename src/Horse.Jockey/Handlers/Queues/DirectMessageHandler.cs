using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Horse.Jockey.Core;
using Horse.Jockey.Helpers;
using Horse.Jockey.Models.Subscriptions;
using Horse.Jockey.Models.WebSockets;
using Horse.Messaging.Protocol;
using Horse.Messaging.Server.Clients;
using Horse.Messaging.Server.Direct;
using Horse.WebSocket.Models;
using Microsoft.Extensions.DependencyInjection;

namespace Horse.Jockey.Handlers.Queues
{
	internal class DirectMessageHandler : IDirectMessageHandler
	{
		private readonly MessageCounter _counter;
		private readonly SubscriptionService _subscriptionService;

		public DirectMessageHandler(MessageCounter counter, SubscriptionService subscriptionService)
		{
			_counter = counter;
			_subscriptionService = subscriptionService;
		}

		public Task OnDirect(MessagingClient sender, HorseMessage message, List<MessagingClient> receivers)
		{
			_counter.AddDirectMessage();

			if (receivers.Count > 0)
				_counter.AddDirectDelivery(receivers.Count);

			IEnumerable<ConsoleSubscription> subscriptions = _subscriptionService.FindConsoleSubscribers(message).ToList();
			if (!subscriptions.Any()) return Task.CompletedTask;

			IWebSocketServerBus bus = Hub.Provider.GetRequiredService<IWebSocketServerBus>();
			ConsoleMessage consoleMessage = new()
			{
				Date = DateTime.UtcNow.ToUnixSeconds(),
				Name = message.Target,
				ContentType = message.ContentType,
				MessageId = message.MessageId,
				Message = message.GetStringContent(),
				Status = receivers.Count > 0 ? "Delivered" : "Not Delivered"
			};

			foreach (ConsoleSubscription subscription in subscriptions)
				_ = bus.SendAsync(subscription.Client, consoleMessage);

			return Task.CompletedTask;
		}

		public Task OnNotFound(MessagingClient sender, HorseMessage message)
		{
			_counter.AddDirectNotFound();
			return Task.CompletedTask;
		}

		public Task OnResponse(MessagingClient sender, HorseMessage message, MessagingClient receiver)
		{
			_counter.AddDirectResponse();
			return Task.CompletedTask;
		}
	}
}
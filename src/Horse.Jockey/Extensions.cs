using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using Horse.Jockey.Core;
using Horse.Jockey.Handlers.Queues;
using Horse.Jockey.Helpers;
using Horse.Jockey.Resource;
using Horse.Messaging.Server;
using Horse.Mvc;
using Horse.Mvc.Auth.Jwt;
using Horse.Mvc.Errors;
using Horse.Mvc.Middlewares;
using Horse.Server;
using Horse.WebSocket.Protocol;
using Horse.WebSocket.Protocol.Serialization;
using Horse.WebSocket.Server;
using Microsoft.Extensions.DependencyInjection;

namespace Horse.Jockey
{
    /// <summary>
    ///     Extension methods for Jockey Implementation
    /// </summary>
    public static class Extensions
    {
        /// <summary>
        ///     Adds Jockey to Horse MQ
        /// </summary>
        public static HorseRiderBuilder AddJockey(this HorseRiderBuilder builder, Action<JockeyOptions> options)
        {
            HorseRider rider = builder.Build();
            AddJockey(rider, options);
            return builder;
        }

        /// <summary>
        ///     Adds Jockey to Horse MQ
        /// </summary>
        public static void AddJockey(this HorseRider rider, Action<JockeyOptions> options)
        {
            JockeyOptions jopt = new();
            options(jopt);
            AddJockey(rider, jopt);
        }

        /// <summary>
        ///     Adds Jockey to Horse MQ
        /// </summary>
        public static void AddJockey(this HorseRider rider, JockeyOptions options)
        {
            Hub.Server = new HorseServer();

            Hub.Mvc = new HorseMvc();
            Hub.Mvc.Init(async services =>
            {
                SubscriptionService subscriptionService = new SubscriptionService();

                ResourceProvider provider = new ResourceProvider();
                await provider.Load();

                MessageCounter counter = new MessageCounter(rider);
                counter.Run();

                QueueWatcherContainer watcherContainer = new QueueWatcherContainer();
                watcherContainer.Initialize(rider, options);

                QueueEventHandler queueEventHandler = new QueueEventHandler();
                rider.Queue.EventHandlers.Add(queueEventHandler);

                ChannelEventHandler channelEventHandler = new ChannelEventHandler(subscriptionService);
                rider.Channel.EventHandlers.Add(channelEventHandler);

                ErrorHandler errorHandler = new ErrorHandler();
                rider.ErrorHandlers.Add(errorHandler);

                rider.Queue.MessageHandlers.Add(new QueueMessageEventHandler(subscriptionService));
                rider.Direct.MessageHandlers.Add(new DirectMessageHandler(counter, subscriptionService));
                rider.Router.MessageHandlers.Add(new RouterMessageHandler(counter, subscriptionService));

                services.AddSingleton(rider);
                services.AddSingleton(options);
                services.AddSingleton(provider);
                services.AddSingleton(watcherContainer);
                services.AddSingleton(queueEventHandler);
                services.AddSingleton(errorHandler);
                services.AddSingleton(counter);
                services.AddSingleton(Hub.Clients);
                services.AddSingleton(subscriptionService);

#if DEBUG
                string securityKey = "Jockey-Development-Key-000";
#else
                string securityKey = $"{Guid.NewGuid()}-{Guid.NewGuid()}-{Guid.NewGuid()}";
#endif

                if (!string.IsNullOrEmpty(options.CustomSecret))
                    securityKey = options.CustomSecret;

                services.AddJwt(Hub.Mvc, o =>
                {
                    o.Key = securityKey;
                    o.Issuer = "jockey";
                    o.Audience = "jockey";
                    o.Lifetime = TimeSpan.FromHours(24);
                    o.ValidateAudience = false;
                    o.ValidateIssuer = false;
                    o.ValidateLifetime = true;
                });

                Hub.Server.AddWebSockets(cfg => cfg
                    .UsePayloadModelProvider(new SystemJsonModelSerializer())
                    .UseMSDI(services)
                    .AddSingletonHandlers(typeof(Hub))
                    .OnClientConnected((info, data) =>
                    {
                        Dictionary<string, string> pairs = data.Path.ParseQuerystring();

                        pairs.TryGetValue("token", out string token);

                        if (string.IsNullOrEmpty(token))
                            return null;

                        if (Hub.Mvc.ClaimsPrincipalValidator != null)
                        {
                            ClaimsPrincipal principal = Hub.Mvc.ClaimsPrincipalValidator.Get(token);
                            if (principal == null)
                                return null;
                        }

                        WsServerSocket websocket = new(Hub.Server, info);
                        return Task.FromResult(websocket);
                    })
                    .OnClientReady(client =>
                    {
                        Hub.Clients.Add(client);
                        return Task.CompletedTask;
                    })
                    .OnClientDisconnected(client =>
                    {
                        Hub.Clients.Remove(client);
                        if (Hub.Provider == null) return Task.CompletedTask;
                        SubscriptionService subsService = Hub.Provider.GetRequiredService<SubscriptionService>();
                        subsService.UnsubscribeQueueDetail(client);
                        subsService.UnsubscribeConsole(client);

                        return Task.CompletedTask;
                    })
                    .OnError(e => { Console.WriteLine("Jockey WebSocket Error: " + e); }));
            });


            CorsMiddleware middleware = new();
            middleware.AllowAll();

            Hub.Mvc.Use(app =>
            {
                app.UseMiddleware(middleware);
                
                IServiceProvider provider = app.GetProvider();
                Hub.Provider = provider;

                QueueWatcherContainer watchers = provider.GetService<QueueWatcherContainer>();
                watchers.LoadAll(rider);

                ResourceProvider resourceProvider = provider.GetRequiredService<ResourceProvider>();
                resourceProvider.Use(app);
            });

            Hub.Server.UseMvc(Hub.Mvc);
            Hub.Server.UseWebSockets(Hub.Provider);

            Hub.Server.Start(options.Port);
        }
    }
}
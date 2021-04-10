using System;
using System.Security.Claims;
using System.Threading.Tasks;
using Horse.Jockey.Core;
using Horse.Jockey.Handlers.Queues;
using Horse.Jockey.Helpers;
using Horse.Jockey.Resource;
using Horse.Mq;
using Horse.Mvc;
using Horse.Mvc.Auth.Jwt;
using Horse.Mvc.Middlewares;
using Horse.Protocols.WebSocket;
using Horse.Server;
using Horse.WebSocket.Models;
using Horse.WebSocket.Models.Serialization;
using Microsoft.Extensions.DependencyInjection;

namespace Horse.Jockey
{
    public static class Extensions
    {
        public static HorseMqBuilder AddJockey(this HorseMqBuilder builder, Action<JockeyOptions> options)
        {
            HorseMq mq = builder.Build();
            AddJockey(mq, options);
            return builder;
        }

        public static void AddJockey(this HorseMq mq, Action<JockeyOptions> options)
        {
            JockeyOptions jopt = new JockeyOptions();
            options(jopt);
            AddJockey(mq, jopt);
        }

        public static void AddJockey(this HorseMq mq, JockeyOptions options)
        {
            Hub.Server = new HorseServer();

            Hub.Mvc = new HorseMvc();
            Hub.Mvc.Init(async services =>
            {
                SubscriptionService subscriptionService = new SubscriptionService();

                ResourceProvider provider = new ResourceProvider();
                await provider.Load();

                MessageCounter counter = new MessageCounter();
                counter.Run();

                QueueWatcherContainer watcherContainer = new QueueWatcherContainer();
                watcherContainer.Initialize(mq, options);

                QueueEventHandler queueEventHandler = new QueueEventHandler();
                mq.AddQueueEventHandler(queueEventHandler);

                ErrorHandler errorHandler = new ErrorHandler();
                mq.AddErrorHandler(errorHandler);

                mq.AddQueueMessageHandler(new QueueMessageEventHandler(subscriptionService));
                mq.AddDirectMessageHandler(new DirectMessageHandler(counter, subscriptionService));
                mq.AddRouterMessageHandler(new RouterMessageHandler(counter, subscriptionService));

                services.AddSingleton(mq);
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
                                                .AddBus(services)
                                                .AddSingletonHandlers(typeof(Hub))
                                                .OnClientConnected((info, data) =>
                                                {
                                                    var pairs = data.Path.ParseQuerystring();

                                                    string token;
                                                    pairs.TryGetValue("token", out token);

                                                    if (string.IsNullOrEmpty(token))
                                                        return null;

                                                    if (Hub.Mvc.ClaimsPrincipalValidator != null)
                                                    {
                                                        ClaimsPrincipal principal = Hub.Mvc.ClaimsPrincipalValidator.Get(token);
                                                        if (principal == null)
                                                            return null;
                                                    }

                                                    WsServerSocket websocket = new WsServerSocket(Hub.Server, info);
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

                                                    if (Hub.Provider != null)
                                                    {
                                                        SubscriptionService subsService = Hub.Provider.GetService<SubscriptionService>();
                                                        subsService.UnsubscribeQueueDetail(client);
                                                        subsService.UnsubscribeConsole(client);
                                                    }

                                                    return Task.CompletedTask;
                                                })
                                                .OnError(e =>
                                                {
                                                    Console.WriteLine("Jockey WebSocket Error: " + e);
                                                }));
            });


            CorsMiddleware middleware = new CorsMiddleware();
            middleware.AllowAll();

            Hub.Mvc.Use(app =>
            {
                app.UseMiddleware(middleware);

                IServiceProvider provider = app.GetProvider();
                Hub.Provider = provider;

                ResourceProvider resourceProvider = provider.GetService<ResourceProvider>();
                resourceProvider.Use(app);
            });

            Hub.Server.UseMvc(Hub.Mvc);
            Hub.Server.UseWebSockets(Hub.Provider);

            Hub.Server.Start(options.Port);
        }
    }
}
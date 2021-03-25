using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using Horse.Jockey.Core;
using Horse.Jockey.Handlers;
using Horse.Jockey.Handlers.Queues;
using Horse.Jockey.Resource;
using Horse.Mq;
using Horse.Mvc;
using Horse.Mvc.Auth.Jwt;
using Horse.Mvc.Middlewares;
using Horse.Server;
using Horse.WebSocket.Models;
using Horse.WebSocket.Models.Serialization;
using Microsoft.Extensions.DependencyInjection;

namespace Horse.Jockey
{
    public static class Extensions
    {
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
                ResourceProvider provider = new ResourceProvider();
                await provider.Load();

                QueueWatcherContainer watcherContainer = new QueueWatcherContainer();
                watcherContainer.Initialize(mq, options);

                ClientHandler clientHandler = new ClientHandler();
                mq.AddClientHandler(clientHandler);

                QueueEventHandler queueEventHandler = new QueueEventHandler();
                mq.AddQueueEventHandler(queueEventHandler);

                ErrorHandler errorHandler = new ErrorHandler();
                mq.AddErrorHandler(errorHandler);

                services.AddSingleton(mq);
                services.AddSingleton(options);
                services.AddSingleton(provider);
                services.AddSingleton(watcherContainer);
                services.AddSingleton(clientHandler);
                services.AddSingleton(queueEventHandler);
                services.AddSingleton(errorHandler);

                services.AddJwt(Hub.Mvc, o =>
                {
                    o.Key = $"{Guid.NewGuid()}-{Guid.NewGuid()}-{Guid.NewGuid()}";
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
                                                .OnClientReady(client =>
                                                {
                                                    Hub.Clients.Add(client);
                                                    return Task.CompletedTask;
                                                })
                                                .OnClientDisconnected(client =>
                                                {
                                                    Hub.Clients.Remove(client);
                                                    return Task.CompletedTask;
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
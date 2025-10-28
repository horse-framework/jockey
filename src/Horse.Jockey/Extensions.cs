using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Threading.Tasks;
using Horse.Jockey.Core;
using Horse.Jockey.Handlers;
using Horse.Jockey.Helpers;
using Horse.Messaging.Server;
using Horse.Server;
using Horse.WebSocket.Protocol;
using Horse.WebSocket.Protocol.Serialization;
using Horse.WebSocket.Server;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Primitives;
using Microsoft.IdentityModel.Tokens;
using Yarp.ReverseProxy.Forwarder;

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
            Hub.SocketServer = new HorseServer();

            var builder = WebApplication.CreateBuilder([]);
            IServiceCollection services = builder.Services;

            builder.Logging.ClearProviders();
            builder.Logging.AddConsole();
            builder.Logging.SetMinimumLevel(LogLevel.Warning);

            services.AddHttpForwarder();
            services.AddCors(o =>
            {
                o.AddPolicy("Default", c =>
                {
                    c.AllowAnyOrigin();
                    c.AllowAnyMethod();
                    c.AllowAnyHeader();
                });
            });

            services.AddEndpointsApiExplorer();
            services.AddControllers()
                .AddApplicationPart(typeof(Extensions).Assembly)
                .AddJsonOptions(o =>
                {
                    o.JsonSerializerOptions.DictionaryKeyPolicy = JsonNamingPolicy.CamelCase;
                    o.JsonSerializerOptions.PropertyNamingPolicy = JsonNamingPolicy.CamelCase;
                    o.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter());
                    o.JsonSerializerOptions.DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull;
                });

            SubscriptionService subscriptionService = new SubscriptionService();

            MessageCounter messageCounter = new MessageCounter(rider);
            messageCounter.Run();

            QueueEventHandler queueEventHandler = new QueueEventHandler(messageCounter);
            rider.Queue.EventHandlers.Add(queueEventHandler);

            ChannelEventHandler channelEventHandler = new ChannelEventHandler(subscriptionService, messageCounter);
            rider.Channel.EventHandlers.Add(channelEventHandler);

            ErrorHandler errorHandler = new ErrorHandler();
            rider.ErrorHandlers.Add(errorHandler);

            rider.Queue.MessageHandlers.Add(new QueueMessageEventHandler(subscriptionService));
            rider.Direct.MessageHandlers.Add(new DirectMessageHandler(messageCounter, subscriptionService));
            rider.Router.MessageHandlers.Add(new RouterMessageHandler(messageCounter, subscriptionService));
            rider.Client.Handlers.Add(new ClientHandler(messageCounter));

            services.AddSingleton(rider);
            services.AddSingleton(options);
            services.AddSingleton(queueEventHandler);
            services.AddSingleton(errorHandler);
            services.AddSingleton(messageCounter);
            services.AddSingleton(Hub.Clients);
            services.AddSingleton(subscriptionService);

            string securityKey = $"{Guid.NewGuid()}-{Guid.NewGuid()}-{Guid.NewGuid()}";
            if (!string.IsNullOrEmpty(options.CustomSecret))
                securityKey = options.CustomSecret;

            var tokenValidationParameters = new TokenValidationParameters
            {
                ValidateIssuerSigningKey = true,
                IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(securityKey)),
                ValidateIssuer = false,
                ValidateAudience = false,
                RequireExpirationTime = false,
                ValidateLifetime = true,
                ClockSkew = TimeSpan.Zero,
                RoleClaimType = JwtRegisteredClaimNames.Typ
            };

            services.AddSingleton(tokenValidationParameters);
            services.AddAuthentication(x =>
                {
                    x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                    x.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
                    x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                })
                .AddJwtBearer(x =>
                {
                    x.SaveToken = true;
                    x.RequireHttpsMetadata = false;
                    x.TokenValidationParameters = tokenValidationParameters;
                });

            Hub.SocketServer.AddWebSockets(services, cfg => cfg
                .UsePayloadModelProvider(new SystemJsonModelSerializer())
                .AddSingletonHandlers(typeof(Hub))
                .OnClientConnected((_, info, data, obs) =>
                {
                    Dictionary<string, string> pairs = data.Path.ParseQuerystring();

                    pairs.TryGetValue("token", out string token);

                    if (string.IsNullOrEmpty(token))
                        return null;

                    /*
                    if (Hub.Mvc.ClaimsPrincipalValidator != null)
                    {
                        ClaimsPrincipal principal = Hub.Mvc.ClaimsPrincipalValidator.Get(token);
                        if (principal == null)
                            return null;
                    }
                    */

                    WsServerSocket websocket = new(Hub.SocketServer, info, obs);
                    return Task.FromResult(websocket);
                })
                .OnClientReady((_, client) =>
                {
                    Hub.Clients.Add(client);
                    return Task.CompletedTask;
                })
                .OnClientDisconnected((_, client) =>
                {
                    Hub.Clients.Remove(client);
                    if (Hub.Provider == null) return Task.CompletedTask;
                    SubscriptionService subsService = Hub.Provider.GetRequiredService<SubscriptionService>();
                    subsService.UnsubscribeQueueDetail(client);
                    subsService.UnsubscribeConsole(client);

                    return Task.CompletedTask;
                })
                .OnError((e, msg, client) => { Console.WriteLine("Jockey WebSocket Error: " + e); }));

            var app = builder.Build();

            Hub.Provider = app.Services;
            IHttpForwarder forwarder = app.Services.GetRequiredService<IHttpForwarder>();

            var httpClient = new HttpMessageInvoker(new SocketsHttpHandler
            {
                UseProxy = false,
                AllowAutoRedirect = false,
                AutomaticDecompression = DecompressionMethods.None,
                UseCookies = false
            });

            string websocketTarget = "http://localhost:" + (options.Port + 1);
            app.Use(async (context, next) =>
            {
                StringValues upgradeValue = context.Request.Headers.Upgrade;
                if (upgradeValue.Contains("websocket", StringComparer.InvariantCultureIgnoreCase))
                {
                    await forwarder.SendAsync(context, websocketTarget, httpClient);
                    return;
                }

                await next();
            });

            app.UseMiddleware<EmbeddedResourceMiddleware>();

            app.UseRouting();
            app.UseCors("Default");
            app.UseAuthentication();
            app.UseAuthorization();
            app.MapDefaultControllerRoute();
            app.MapControllers();

            Hub.SocketServer.UseWebSockets(Hub.Provider);
            Hub.SocketServer.Start(options.Port + 1);

            _ = app.RunAsync("http://localhost:" + options.Port);
        }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using Horse.Jockey.Resource;
using Horse.Mq;
using Horse.Mvc;
using Horse.Mvc.Auth.Jwt;
using Horse.Mvc.Middlewares;
using Horse.Server;
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
            Hub.Mvc = new HorseMvc();
            Hub.Mvc.Init(async services =>
            {
                ResourceProvider provider = new ResourceProvider();
                await provider.Load();

                services.AddSingleton(provider);
                services.AddSingleton(mq);
                services.AddSingleton(options);

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
            });

            CorsMiddleware middleware = new CorsMiddleware();
            middleware.AllowAll();

            Hub.Mvc.Use(app =>
            {
                app.UseMiddleware(middleware);

                IServiceProvider provider = app.GetProvider();
                ResourceProvider resourceProvider = provider.GetService<ResourceProvider>();
                resourceProvider.Use(app);
            });

            Hub.Server = new HorseServer();
            Hub.Server.UseMvc(Hub.Mvc);
            Hub.Server.Start(options.Port);
        }
    }
}
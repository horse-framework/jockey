using System;
using Horse.Jockey.Core;
using Microsoft.Extensions.DependencyInjection;

namespace Horse.Jockey.Handlers.Queues
{
    public class BaseHandler
    {
        protected IServiceProvider GetProvider()
        {
            return Hub.Provider;
        }

        protected QueueWatcherContainer GetWatcherProvider()
        {
            return Hub.Provider.GetService<QueueWatcherContainer>();
        }

    }
}
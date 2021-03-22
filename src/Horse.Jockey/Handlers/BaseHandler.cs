using System;
using Horse.Jockey.Containers;
using Horse.Jockey.Core;
using Horse.Mq.Queues;
using Microsoft.Extensions.DependencyInjection;

namespace Horse.Jockey.Handlers
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
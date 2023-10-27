using System;

namespace Horse.Jockey.Handlers.Queues
{
    internal class BaseHandler
    {
        protected IServiceProvider GetProvider()
        {
            return Hub.Provider;
        }
    }
}
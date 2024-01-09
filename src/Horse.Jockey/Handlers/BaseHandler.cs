using System;

namespace Horse.Jockey.Handlers
{
    internal class BaseHandler
    {
        protected IServiceProvider GetProvider()
        {
            return Hub.Provider;
        }
    }
}
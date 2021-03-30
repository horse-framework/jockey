using System;
using Horse.Mq;

namespace Horse.Jockey.Handlers.Queues
{
    public class ErrorHandler : BaseHandler, IErrorHandler
    {
        public void Error(string hint, Exception exception, string payload)
        {
        }
    }
}
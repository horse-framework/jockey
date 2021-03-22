using System;
using Horse.Mq;

namespace Horse.Jockey.Handlers
{
    public class ErrorHandler : BaseHandler, IErrorHandler
    {
        public void Error(string hint, Exception exception, string payload)
        {
            throw new NotImplementedException();
        }
    }
}
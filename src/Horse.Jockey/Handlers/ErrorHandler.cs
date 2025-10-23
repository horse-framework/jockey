using System;
using Horse.Messaging.Server.Logging;

namespace Horse.Jockey.Handlers
{
	internal class ErrorHandler : BaseHandler, IErrorHandler
	{
        public void Error(HorseLogLevel logLevel, int eventId, string message, Exception exception)
        {
        }
    }
}
using System;
using Horse.Messaging.Server;

namespace Horse.Jockey.Handlers.Queues
{
	internal class ErrorHandler : BaseHandler, IErrorHandler
	{
		public void Error(string hint, Exception exception, string payload) { }
	}
}
using System;
using Horse.Jockey.Handlers.Queues;
using Horse.Messaging.Server;

namespace Horse.Jockey.Handlers
{
	internal class ErrorHandler : BaseHandler, IErrorHandler
	{
		public void Error(string hint, Exception exception, string payload) { }
	}
}
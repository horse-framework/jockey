using System;
using Horse.Messaging.Server;

namespace Horse.Jockey.Helpers
{
	internal static class TimeExtensions
	{
		public static long ToUnixSeconds(this DateTime? time)
		{
			if (!time.HasValue)
				return 0;

			return Convert.ToInt64((time.Value - new DateTime(1970, 1, 1)).TotalSeconds);
		}

		public static long ToUnixSeconds(this DateTime time)
		{
			return Convert.ToInt64((time - new DateTime(1970, 1, 1)).TotalSeconds);
		}

		public static long ToMilliseconds(this TimeSpan span)
		{
			return Convert.ToInt64(span.TotalMilliseconds);
		}

		public static string ToHandlerString(this IMessageDeliveryHandler handler)
		{
			string handlerName = handler.GetType().Name;

			if (handlerName.EndsWith("DeliveryHandler"))
				return handlerName.Replace("DeliveryHandler", "");

			if (handlerName.EndsWith("Handler"))
				return handlerName.Replace("Handler", "");

			return handlerName;
		}
	}
}
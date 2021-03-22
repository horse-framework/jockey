using System;

namespace Horse.Jockey.Helpers
{
    public static class TimeExtensions
    {
        public static long ToUnixSeconds(this DateTime time)
        {
            return Convert.ToInt64((time - new DateTime(1970, 1, 1)).TotalSeconds);
        }
    }
}
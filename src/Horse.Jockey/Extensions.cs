using System;
using Horse.Core;
using Horse.Mq;

namespace Horse.Jockey
{
    public static class Extensions
    {
        public static void AddJockey(this HorseMq mq, Action<JockeyOptions> options)
        {
            JockeyOptions jopt = new JockeyOptions();
            options(jopt);
            AddJockey(mq, jopt);
        }

        public static void AddJockey(this HorseMq mq, JockeyOptions options)
        {
            throw new NotImplementedException();
        }

        public static void UseJockey(this HorseMq mq)
        {
            throw new NotImplementedException();
        }
    }
}
using System;
using System.Threading.Tasks;
using Horse.Jockey.Models.User;

namespace Horse.Jockey
{
    public class JockeyOptions
    {
        public int Port { get; set; } = 26000;

        public bool UseWebsockets { get; set; } = true;

        public TimeSpan StatisticsKeepAliveDuration { get; set; } = TimeSpan.Zero;

        public Func<UserLogin, Task<UserInfo>> AuthAsync { get; set; }
    }
}
using System;
using System.Threading.Tasks;
using Horse.Jockey.Models.User;

namespace Horse.Jockey
{
    /// <summary>
    /// Jockey Options
    /// </summary>
    public class JockeyOptions
    {
        /// <summary>
        /// Jockey Administration website port
        /// </summary>
        public int Port { get; set; } = 26000;

        /// <summary>
        /// If true, Jockey supports websockets.
        /// In order to use Console in Jockey, websockets must be enabled.
        /// </summary>
        public bool UseWebsockets { get; set; } = true;

        /// <summary>
        /// If you don't want to keep realtime data when there is no online client on administration website.
        /// You can set non zero value. For example, if you set that value 30 secs, statistics are not kept 30 secs after all clients are disconnected from websocket.
        /// </summary>
        public TimeSpan StatisticsKeepAliveDuration { get; set; } = TimeSpan.Zero;

        /// <summary>
        /// Authentication implementation.
        /// If this value is not set, all username and passwords are accepts as admin login.
        /// </summary>
        public Func<UserLogin, Task<UserInfo>> AuthAsync { get; set; }
    }
}
using System;
using System.Threading.Tasks;
using Horse.Jockey.Models;

namespace Horse.Jockey
{
    public class JockeyOptions
    {
        public int Port { get; set; }

        public Func<UserLogin, Task<UserInfo>> AuthAsync { get; set; }
    }
}
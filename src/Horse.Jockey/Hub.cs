using System;
using Horse.Mvc;
using Horse.Server;
using Horse.Server.Containers;

namespace Horse.Jockey
{
    internal class Hub
    {
        internal static DateTime StartedDate { get; } = DateTime.UtcNow;
        internal static HorseServer Server { get; set; }
        internal static HorseMvc Mvc { get; set; }
        internal static IServiceProvider Provider { get; set; }

        internal static IClientContainer Clients { get; set; } = new ClientContainer();
    }
}
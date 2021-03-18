using Horse.Mq;
using Horse.Mvc;
using Horse.Server;

namespace Horse.Jockey
{
    internal class Hub
    {
        internal static HorseMq Mq { get; set; }
        internal static HorseServer Server { get; set; }
        internal static HorseMvc Mvc { get; set; }
    }
}
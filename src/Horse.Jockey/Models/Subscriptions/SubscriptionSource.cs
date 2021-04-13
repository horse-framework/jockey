using System.ComponentModel;

namespace Horse.Jockey.Models.Subscriptions
{
    internal enum SubscriptionSource
    {
        [Description("direct")]
        Direct,

        [Description("queue")]
        Queue,

        [Description("router")]
        Router
    }
}
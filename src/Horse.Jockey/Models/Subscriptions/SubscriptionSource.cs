using System.ComponentModel;

namespace Horse.Jockey.Models.Subscriptions
{
    internal enum SubscriptionSource
    {
        [Description("all")]
        All,
        
        [Description("direct")]
        Direct,

        [Description("queue")]
        Queue,

        [Description("router")]
        Router,
        
        [Description("channel")]
        Channel
    }
}
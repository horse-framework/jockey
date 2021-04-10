using System.ComponentModel;

namespace Horse.Jockey.Models.Subscriptions
{
    public enum SubscriptionSource
    {
        [Description("direct")]
        Direct,

        [Description("queue")]
        Queue,

        [Description("router")]
        Router
    }
}
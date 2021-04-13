using System.ComponentModel;

namespace Horse.Jockey.Models.Subscriptions
{
    internal enum SubscriptionTargetType
    {
        [Description("id")]
        Id,

        [Description("name")]
        Name,

        [Description("type")]
        Type,

        [Description("topic")]
        Topic
    }
}
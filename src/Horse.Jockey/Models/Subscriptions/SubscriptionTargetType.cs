using System.ComponentModel;

namespace Horse.Jockey.Models.Subscriptions
{
    public enum SubscriptionTargetType
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
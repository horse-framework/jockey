using System.Linq;
using System.Text.Json.Serialization;
using Horse.Jockey.Helpers;
using Horse.Messaging.Server;
using Newtonsoft.Json;

namespace Horse.Jockey.Models
{
    internal class HorseServerOptions
    {
        [JsonProperty("name")]
        [JsonPropertyName("name")]
        public string Name { get; set; }

        [JsonProperty("type")]
        [JsonPropertyName("type")]
        public string Type { get; set; }

        [JsonProperty("queueLimit")]
        [JsonPropertyName("queueLimit")]
        public int QueueLimit { get; set; }

        [JsonProperty("routerLimit")]
        [JsonPropertyName("routerLimit")]
        public int RouterLimit { get; set; }

        [JsonProperty("autoChannelCreation")]
        [JsonPropertyName("autoChannelCreation")]
        public bool AutoChannelCreation { get; set; }

        [JsonProperty("channelSubscriberLimit")]
        [JsonPropertyName("channelSubscriberLimit")]
        public int ChannelSubscriberLimit { get; set; }

        [JsonProperty("nodes")]
        [JsonPropertyName("nodes")]
        public NodeInfo[] Nodes { get; set; }

        public static HorseServerOptions Create(HorseRider rider)
        {
            return new HorseServerOptions
            {
                Name = rider.Options.Name,
                Type = rider.Options.Type,
                QueueLimit = rider.Options.QueueLimit,
                RouterLimit = rider.Options.RouterLimit,
                AutoChannelCreation = rider.Channel.Options.AutoChannelCreation,
                ChannelSubscriberLimit = rider.Channel.Options.ClientLimit,
                Nodes = rider.Cluster.Clients.Select(x => new NodeInfo
                    {
                        Id = x.Info.Id,
                        Name = x.Info.Name,
                        Host = x.Info.Host,
                        PublicHost = x.Info.PublicHost,
                        State = "-",
                        IsConnected = x.IsConnected,
                        ConnectedDate = x.ConnectedDate.ToUnixSeconds()
                    })
                    .ToArray()
            };
        }
    }
}
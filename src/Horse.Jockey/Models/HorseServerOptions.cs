using System.Linq;
using System.Text.Json.Serialization;
using Horse.Jockey.Helpers;
using Horse.Mq;
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

        [JsonProperty("nodeHosts")]
        [JsonPropertyName("nodeHosts")]
        public string[] NodeHosts { get; set; }

        [JsonProperty("autoQueueCreation")]
        [JsonPropertyName("autoQueueCreation")]
        public bool AutoQueueCreation { get; set; } = true;

        [JsonProperty("queueLimit")]
        [JsonPropertyName("queueLimit")]
        public int QueueLimit { get; set; }

        [JsonProperty("routerLimit")]
        [JsonPropertyName("routerLimit")]
        public int RouterLimit { get; set; }

        [JsonProperty("nodes")]
        [JsonPropertyName("nodes")]
        public NodeInfo[] Nodes { get; set; }

        public static HorseServerOptions Create(HorseMq mq)
        {
            return new HorseServerOptions
                   {
                       Name = mq.Options.Name,
                       Type = mq.Options.Type,
                       QueueLimit = mq.Options.QueueLimit,
                       RouterLimit = mq.Options.RouterLimit,
                       AutoQueueCreation = mq.Options.AutoQueueCreation,
                       NodeHosts = mq.GetNodeHostnames(),
                       Nodes = mq.Options.Nodes == null
                                   ? new NodeInfo[0]
                                   : mq.Options.Nodes.Select(x => new NodeInfo
                                                                  {
                                                                      Host = x.Host,
                                                                      Name = x.Name,
                                                                      Token = x.Token,
                                                                      KeepMessages = x.KeepMessages,
                                                                      ReconnectWait = x.ReconnectWait
                                                                  }).ToArray()
                   };
        }
    }
}
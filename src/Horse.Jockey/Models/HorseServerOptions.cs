using System.Linq;
using System.Text.Json.Serialization;
using Horse.Jockey.Helpers;
using Horse.Mq;
using Newtonsoft.Json;

namespace Horse.Jockey.Models
{
    public class HorseServerOptions
    {
        /// <summary>
        /// Server name, will be used while connecting to other instances
        /// </summary>
        [JsonProperty("name")]
        [JsonPropertyName("name")]
        public string Name { get; set; }

        /// <summary>
        /// Server type, will be used while connecting to other instances
        /// </summary>
        [JsonProperty("type")]
        [JsonPropertyName("type")]
        public string Type { get; set; }

        /// <summary>
        /// Hostname for nodes such as hmq://*:123
        /// </summary>
        [JsonProperty("nodeHosts")]
        [JsonPropertyName("nodeHosts")]
        public string[] NodeHosts { get; set; }

        /// <summary>
        /// If true, queue will be created automatically with default options
        /// when a client tries to subscribe or push a message to not existing queue.
        /// </summary>
        [JsonProperty("autoQueueCreation")]
        [JsonPropertyName("autoQueueCreation")]
        public bool AutoQueueCreation { get; set; } = true;

        /// <summary>
        /// Maximum queue limit of the server
        /// Zero is unlimited.
        /// </summary>
        [JsonProperty("queueLimit")]
        [JsonPropertyName("queueLimit")]
        public int QueueLimit { get; set; }

        /// <summary>
        /// Maximum router limit of the server
        /// Zero is unlimited.
        /// </summary>
        [JsonProperty("routerLimit")]
        [JsonPropertyName("routerLimit")]
        public int RouterLimit { get; set; }

        /// <summary>
        /// Other server node informations that will be connected
        /// </summary>
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
                       Nodes = mq.Options.Nodes.Select(x => new NodeInfo
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
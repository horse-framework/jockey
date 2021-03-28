using System.Text.Json.Serialization;
using Horse.Jockey.Helpers;
using Horse.Mq;
using Horse.WebSocket.Models;
using Newtonsoft.Json;

namespace Horse.Jockey.Models
{
    [ModelType("server-stats")]
    public class ServerStatistics
    {
        [JsonProperty("hosts")]
        [JsonPropertyName("hosts")]
        public string[] Hosts { get; set; }

        [JsonProperty("startedDate")]
        [JsonPropertyName("startedDate")]
        public long StartedDate { get; set; }

        [JsonProperty("onlineClients")]
        [JsonPropertyName("onlineClients")]
        public int OnlineClients { get; set; }

        [JsonProperty("incomingNodes")]
        [JsonPropertyName("incomingNodes")]
        public int IncomingNodes { get; set; }

        [JsonProperty("outgoingNodes")]
        [JsonPropertyName("outgoingNodes")]
        public int OutgoingNodes { get; set; }

        [JsonProperty("queueLimit")]
        [JsonPropertyName("queueLimit")]
        public int QueueLimit { get; set; }

        [JsonProperty("routerLimit")]
        [JsonPropertyName("routerLimit")]
        public int RouterLimit { get; set; }

        [JsonProperty("autoQueueCreation")]
        [JsonPropertyName("autoQueueCreation")]
        public bool AutoQueueCreation { get; set; }

        public static ServerStatistics Create(HorseMq mq)
        {
            return new()
                   {
                       Hosts = mq.GetServerHostnames(),
                       QueueLimit = mq.Options.QueueLimit,
                       RouterLimit = mq.Options.RouterLimit,
                       AutoQueueCreation = mq.Options.AutoQueueCreation,
                       StartedDate = Hub.StartedDate.ToUnixSeconds(),
                       IncomingNodes = mq.NodeManager.IncomingNodes.Count,
                       OutgoingNodes = mq.NodeManager.OutgoingNodes.Length,
                       OnlineClients = mq.GetOnlineClients()
                   };
        }
    }
}
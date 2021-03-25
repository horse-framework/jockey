using System.Collections.Generic;
using System.ComponentModel;
using System.Text.Json.Serialization;
using Horse.Jockey.Helpers;
using Horse.Mq;
using Horse.Server;
using Horse.WebSocket.Models;

namespace Horse.Jockey.Models
{
    [ModelType("server-stats")]
    public class ServerStatistics
    {
        [JsonPropertyName("hosts")]
        public string[] Hosts { get; set; }

        [JsonPropertyName("startedDate")]
        public long StartedDate { get; set; }

        [JsonPropertyName("onlineClients")]
        public int OnlineClients { get; set; }

        [JsonPropertyName("incomingNodes")]
        public int IncomingNodes { get; set; }

        [JsonPropertyName("outgoingNodes")]
        public int OutgoingNodes { get; set; }

        [JsonPropertyName("queueLimit")]
        public int QueueLimit { get; set; }

        [JsonPropertyName("routerLimit")]
        public int RouterLimit { get; set; }

        [JsonPropertyName("autoQueueCreation")]
        public bool AutoQueueCreation { get; set; }

        public static ServerStatistics Create(HorseMq mq)
        {
            List<string> hosts = new List<string>();
            foreach (HostOptions host in mq.Server.Options.Hosts)
            {
                string protocol = host.SslEnabled ? "hmqs" : "hmq";

                if (host.Hostnames == null || host.Hostnames.Length == 0)
                    hosts.Add($"{protocol}://*:{host.Port}");
                else
                {
                    foreach (string hostname in host.Hostnames)
                        hosts.Add($"{protocol}://{hostname}:{host.Port}");
                }
            }

            return new()
                   {
                       Hosts = hosts.ToArray(),
                       QueueLimit = mq.Options.QueueLimit,
                       RouterLimit = 0, //todo: #
                       AutoQueueCreation = mq.Options.AutoQueueCreation,
                       StartedDate = Hub.StartedDate.ToUnixSeconds(),
                       IncomingNodes = 0, //todo: #
                       OutgoingNodes = 0, //todo: #
                       OnlineClients = mq.GetOnlineClients()
                   };
        }
    }
}
using System.Linq;
using System.Text.Json.Serialization;
using Horse.Jockey.Helpers;
using Horse.Messaging.Server;
using Horse.WebSocket.Protocol;
using Newtonsoft.Json;

namespace Horse.Jockey.Models
{
    [ModelType("server-stats")]
    internal class ServerStatistics
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

        [JsonProperty("totalNodes")]
        [JsonPropertyName("totalNodes")]
        public int TotalNodes { get; set; }

        [JsonProperty("connectedNodes")]
        [JsonPropertyName("connectedNodes")]
        public int ConnectedNodes { get; set; }

        public static ServerStatistics Create(HorseRider rider)
        {
            return new ServerStatistics
            {
                Hosts = rider.GetServerHostnames(),
                StartedDate = Hub.StartedDate.ToUnixSeconds(),
                TotalNodes = rider.Cluster.Clients.Length,
                ConnectedNodes = rider.Cluster.Clients.Count(x => x.IsConnected),
                OnlineClients = rider.Client.GetOnlineClients()
            };
        }
    }
}
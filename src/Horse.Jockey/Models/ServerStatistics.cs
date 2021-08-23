using System.Text.Json.Serialization;
using Horse.Jockey.Helpers;
using Horse.Messaging.Server;
using Horse.WebSocket.Models;
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

		[JsonProperty("incomingNodes")]
		[JsonPropertyName("incomingNodes")]
		public int IncomingNodes { get; set; }

		[JsonProperty("outgoingNodes")]
		[JsonPropertyName("outgoingNodes")]
		public int OutgoingNodes { get; set; }

		public static ServerStatistics Create(HorseRider rider)
		{
			return new ServerStatistics
			{
				Hosts = rider.GetServerHostnames(),
				StartedDate = Hub.StartedDate.ToUnixSeconds(),
				IncomingNodes = rider.NodeManager.IncomingNodes.Count,
				OutgoingNodes = rider.NodeManager.OutgoingNodes.Length,
				OnlineClients = rider.Client.GetOnlineClients()
			};
		}
	}
}
using System;
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

		[JsonProperty("nodeHosts")]
		[JsonPropertyName("nodeHosts")]
		public string[] NodeHosts { get; set; }

		[JsonProperty("queueLimit")]
		[JsonPropertyName("queueLimit")]
		public int QueueLimit { get; set; }

		[JsonProperty("routerLimit")]
		[JsonPropertyName("routerLimit")]
		public int RouterLimit { get; set; }

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
				NodeHosts = rider.GetNodeHostnames(),
				Nodes = rider.Options.Nodes == null
					? Array.Empty<NodeInfo>()
					: rider.Options.Nodes.Select(x => new NodeInfo
							{
								Host = x.Host,
								Name = x.Name,
								Token = x.Token,
								ReconnectWait = x.ReconnectWait
							})
						   .ToArray()
			};
		}
	}
}
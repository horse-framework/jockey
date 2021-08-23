using System;
using System.Collections.Generic;
using Horse.Messaging.Server;
using Horse.Server;

namespace Horse.Jockey.Helpers
{
	internal static class HostExtensions
	{
		public static string[] GetServerHostnames(this HorseRider rider)
		{
			List<string> hosts = new();
			foreach (HostOptions host in rider.Server.Options.Hosts)
			{
				string protocol = host.SslEnabled ? "hmqs" : "hmq";

				if (host.Hostnames == null || host.Hostnames.Length == 0)
					hosts.Add($"{protocol}://*:{host.Port}");
				else
					foreach (string hostname in host.Hostnames)
						hosts.Add($"{protocol}://{hostname}:{host.Port}");
			}

			return hosts.ToArray();
		}

		public static string[] GetNodeHostnames(this HorseRider rider)
		{
			if (rider.Options.NodeHost == null) return Array.Empty<string>();

			List<string> hosts = new();
			string protocol = rider.Options.NodeHost.SslEnabled ? "hmqs" : "hmq";

			if (rider.Options.NodeHost.Hostnames == null || rider.Options.NodeHost.Hostnames.Length == 0)
			{
				hosts.Add($"{protocol}://*:{rider.Options.NodeHost.Port}");
				return hosts.ToArray();
			}

			foreach (string host in rider.Options.NodeHost.Hostnames)
				hosts.Add($"{protocol}://{host}:{rider.Options.NodeHost.Port}");

			return hosts.ToArray();
		}
	}
}
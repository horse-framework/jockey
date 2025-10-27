using System.Collections.Generic;
using Horse.Messaging.Server;
using HostOptions = Horse.Server.HostOptions;

namespace Horse.Jockey.Helpers
{
	internal static class HostExtensions
	{
		public static string[] GetServerHostnames(this HorseRider rider)
		{
			List<string> hosts = new();
			foreach (HostOptions host in rider.Server.Options.Hosts)
			{
				string protocol = host.SslEnabled ? "horses" : "horse";

				if (host.Hostnames == null || host.Hostnames.Length == 0)
					hosts.Add($"{protocol}://*:{host.Port}");
				else
					foreach (string hostname in host.Hostnames)
						hosts.Add($"{protocol}://{hostname}:{host.Port}");
			}

			return hosts.ToArray();
		}
	}
}
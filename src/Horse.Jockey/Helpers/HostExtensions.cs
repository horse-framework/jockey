using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using Horse.Mq;
using Horse.Server;

namespace Horse.Jockey.Helpers
{
    internal static class HostExtensions
    {
        public static string[] GetServerHostnames(this HorseMq mq)
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

            return hosts.ToArray();
        }

        public static string[] GetNodeHostnames(this HorseMq mq)
        {
            if (mq.Options.NodeHost == null)
                return new string[0];

            List<string> hosts = new List<string>();
            string protocol = mq.Options.NodeHost.SslEnabled ? "hmqs" : "hmq";

            if (mq.Options.NodeHost.Hostnames == null || mq.Options.NodeHost.Hostnames.Length == 0)
            {
                hosts.Add($"{protocol}://*:{mq.Options.NodeHost.Port}");
                return hosts.ToArray();
            }

            foreach (string host in mq.Options.NodeHost.Hostnames)
                hosts.Add($"{protocol}://{host}:{mq.Options.NodeHost.Port}");

            return hosts.ToArray();
        }
    }
}
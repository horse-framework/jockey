using System;
using System.Threading.Tasks;
using Horse.Jockey;
using Horse.Messaging.Client;
using Horse.Messaging.Protocol;
using Horse.Messaging.Server;
using Horse.Messaging.Server.Routing;
using Horse.Server;

namespace Sample.Jockey
{
	internal class Program
	{
		private static async Task Main(string[] args)
		{
			HorseRider mq = HorseRiderBuilder.Create()
											 .ConfigureQueues(o => { o.UseJustAllowDeliveryHandler(); })
											 .AddJockey(o => o.Port = 15400)
											 .Build();

			IRouter router1 = mq.Router.Add("router-1", RouteMethod.Distribute);
			router1.AddBinding(new DirectBinding("direct-1", "@name:client-x", 123, 1, BindingInteraction.None));
			router1.AddBinding(new DirectBinding("direct-2", "@name:client-y", 200, 2, BindingInteraction.None));

			IRouter router2 = mq.Router.Add("router-2", RouteMethod.RoundRobin);
			router2.AddBinding(new HttpBinding("http1", "http://localhost:123/endpoint", HttpBindingMethod.Post, 100, BindingInteraction.Response));

			HorseServer server = new();
			server.UseRider(mq);
			server.Start(26222);

			Console.ReadLine();
			HorseClient client = new();
			await client.ConnectAsync("hmq://localhost:9999");
			Console.ReadLine();
			int i = 1;
			while (true)
			{
				await client.Queue.Push("qq1", "Hello World: " + i, false);
				i++;

				if (i >= 10000)
					break;

				await Task.Delay(1);
			}

			Console.ReadLine();
		}
	}
}
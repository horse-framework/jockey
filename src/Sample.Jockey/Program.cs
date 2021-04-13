using System;
using System.Diagnostics;
using System.Threading.Tasks;
using Horse.Jockey;
using Horse.Mq;
using Horse.Mq.Client;
using Horse.Mq.Queues;
using Horse.Mq.Routing;
using Horse.Protocols.Hmq;
using Horse.Server;

namespace Sample.Jockey
{
    class Program
    {
        static async Task Main(string[] args)
        {
            HorseMq mq = HorseMqBuilder.Create()
                                       .AddOptions(o => o.Status = QueueStatus.Broadcast)
                                       .AddJockey(o => o.Port = 15400)
                                       .UseJustAllowDeliveryHandler()
                                       .Build();

            IRouter router1 = mq.AddRouter("router-1", RouteMethod.Distribute);
            router1.AddBinding(new DirectBinding("direct-1", "@name:client-x", 123, 1, BindingInteraction.None));
            router1.AddBinding(new DirectBinding("direct-2", "@name:client-y", 200, 2, BindingInteraction.None));

            IRouter router2 = mq.AddRouter("router-2", RouteMethod.RoundRobin);
            router2.AddBinding(new HttpBinding("http1", "http://localhost:123/endpoint", HttpBindingMethod.Post, 100, BindingInteraction.Response));

            HorseServer server = new HorseServer();
            server.UseHorseMq(mq);
            server.Start(9999);

            Console.ReadLine();
            HorseClient client = new HorseClient();
            await client.ConnectAsync("hmq://localhost:9999");
            Console.ReadLine();
            int i = 1;
            while (true)
            {
                await client.Queues.Push("qq1", "Hello World: " + i, false);
                i++;
                
                if (i >= 5000)
                    break;
            }

            Console.ReadLine();
        }
    }
}
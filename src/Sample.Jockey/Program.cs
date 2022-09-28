using System;
using System.IO;
using System.Threading.Tasks;
using Horse.Jockey;
using Horse.Messaging.Client;
using Horse.Messaging.Data;
using Horse.Messaging.Protocol;
using Horse.Messaging.Server;
using Horse.Messaging.Server.Channels;
using Horse.Messaging.Server.Queues;
using Horse.Messaging.Server.Queues.Delivery;
using Horse.Messaging.Server.Routing;
using Horse.Server;

namespace Sample.Jockey
{
    internal class Program
    {
        private static async Task Main(string[] args)
        {
            HorseRider rider = HorseRiderBuilder.Create()
                .ConfigureQueues(o =>
                {
                    o.Options.AutoQueueCreation = true;
                    o.UsePersistentQueues(d => { d.UseAutoFlush(TimeSpan.FromMilliseconds(250)); }, q =>
                    {
                        q.Options.AutoQueueCreation = true;
                        q.Options.AutoDestroy = QueueDestroy.Disabled;
                        q.Options.CommitWhen = CommitWhen.AfterSaved;
                        q.Options.PutBack = PutBackDecision.Regular;
                        q.Options.Acknowledge = QueueAckDecision.WaitForAcknowledge;
                    });
                })
                .ConfigureRouters(c => c.UsePersistentRouters())
                .AddJockey(o => o.Port = 15400)
                .Build();
/*
            await rider.Queue.Create("DemoQueue1");
            await rider.Queue.Create("DemoQueue2");
            await rider.Queue.Create("DemoQueue3");
            await rider.Queue.Create("DemoQueue4");
*/
            rider.Channel.Options.AutoDestroy = false;
            await rider.Channel.Create("DemoChannel1");
            await rider.Channel.Create("DemoChannel2");
            await rider.Channel.Create("DemoChannel3");
            await rider.Channel.Create("DemoChannel4");

            rider.Cache.Set("DemoCache1", new MemoryStream(), TimeSpan.FromMinutes(24));
            rider.Cache.Set("DemoCache2", new MemoryStream(), TimeSpan.FromMinutes(51));
            rider.Cache.Set("DemoCache3", new MemoryStream(), TimeSpan.FromMinutes(76));
            rider.Cache.Set("DemoCache4", new MemoryStream(), TimeSpan.FromMinutes(113));
            rider.Cache.Set("DemoCache5", new MemoryStream(), TimeSpan.FromMinutes(131));
            rider.Cache.Set("DemoCache6", new MemoryStream(), TimeSpan.FromMinutes(174));
            rider.Cache.Set("DemoCache7", new MemoryStream(), TimeSpan.FromMinutes(200));

            HorseServer server = new();
            server.UseRider(rider);
            server.Start(26222);

            Console.ReadLine();
            HorseClient client = new();
            await client.ConnectAsync("horse://localhost:15400");

            var f = new {ok = true, id = Guid.NewGuid().ToString(), date = 312783621786, extra = new {a = 23, b = "foo"}};
            await client.Queue.PushJson("DemoQueue2", f, false);
            await client.Channel.Publish("DemoChannel2", new {foo = "123"});
            Console.WriteLine("ok");
            Console.ReadLine();

            HorseClient consumer = new();
            await consumer.ConnectAsync("horse://localhost:15400");
            consumer.AutoAcknowledge = true;
            await consumer.Queue.Subscribe("DemoQueue2", true);

            while (true)
            {
                Console.ReadLine();
                int i = 1;
                while (true)
                {
                    await client.Queue.Push("DemoQueue2", "Hello World: " + i, false);
                    await client.Channel.Publish("DemoChannel2", new {foo = "123"});
                    i++;

                    if (i >= 10000)
                        break;

                    await Task.Delay(10);
                    Console.ReadLine();
                }
            }
        }
    }
}
using System;
using System.IO;
using System.Text;
using System.Threading.Tasks;
using Horse.Jockey;
using Horse.Messaging.Client;
using Horse.Messaging.Data;
using Horse.Messaging.Protocol;
using Horse.Messaging.Server;
using Horse.Messaging.Server.Queues;
using Horse.Messaging.Server.Queues.Delivery;
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
                        q.Options.CommitWhen = CommitWhen.AfterReceived;
                        q.Options.PutBack = PutBackDecision.Regular;
                        q.Options.Acknowledge = QueueAckDecision.WaitForAcknowledge;
                    });
                })
                .AddJockey(o => o.Port = 15400)
                .Build();
                
            if (rider.Queue.Find("DemoQueue1") != null)
            {
                await rider.Queue.Create("DemoQueue1");
                await rider.Queue.Create("DemoQueue2");
                await rider.Queue.Create("DemoQueue3");
                await rider.Queue.Create("DemoQueue4");
            }

            rider.Channel.Options.AutoDestroy = false;
            if (rider.Channel.Find("DemoChannel1") == null)
            {
                await rider.Channel.Create("DemoChannel1");
                await rider.Channel.Create("DemoChannel2");
                await rider.Channel.Create("DemoChannel3");
                await rider.Channel.Create("DemoChannel4");
            }

            rider.Cache.Set("DemoCache1", new MemoryStream(Encoding.UTF8.GetBytes("CacheValue1")), TimeSpan.FromMinutes(24));
            rider.Cache.Set("DemoCache2", new MemoryStream(Encoding.UTF8.GetBytes("CacheValue2")), TimeSpan.FromMinutes(51));
            rider.Cache.Set("DemoCache3", new MemoryStream(Encoding.UTF8.GetBytes("CacheValue3")), TimeSpan.FromMinutes(76));
            rider.Cache.Set("DemoCache4", new MemoryStream(Encoding.UTF8.GetBytes("CacheValue4")), TimeSpan.FromMinutes(113));
            rider.Cache.Set("DemoCache5", new MemoryStream(Encoding.UTF8.GetBytes("CacheValue5")), TimeSpan.FromMinutes(131));
            rider.Cache.Set("DemoCache6", new MemoryStream(Encoding.UTF8.GetBytes("CacheValue6")), TimeSpan.FromMinutes(174));
            rider.Cache.Set("DemoCache7", new MemoryStream(Encoding.UTF8.GetBytes("CacheValue7")), TimeSpan.FromMinutes(200));

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
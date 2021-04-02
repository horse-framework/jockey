using System;
using System.Diagnostics;
using Horse.Jockey;
using Horse.Mq;
using Horse.Mq.Queues;
using Horse.Server;

namespace Sample.Jockey
{
    class Program
    {
        static void Main(string[] args)
        {
            HorseMq mq = HorseMqBuilder.Create()
                                       .AddOptions(o => o.Status = QueueStatus.Push)
                                       .AddJockey(o =>
                                       {
                                           o.Port = 9998;
                                           o.StatisticsKeepAliveDuration = TimeSpan.FromDays(30);
                                       })
                                       .UseJustAllowDeliveryHandler()
                                       .Build();

            HorseServer server = new HorseServer();
            server.UseHorseMq(mq);
            server.Start(9999);

            while (true)
            {
                Console.ReadLine();
            }
        }
    }
}
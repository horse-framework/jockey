using System;
using System.Diagnostics;
using Horse.Jockey;
using Horse.Mq;
using Horse.Server;
using Microsoft.VisualBasic;

namespace Sample.Jockey
{
    class Program
    {
        static void Main(string[] args)
        {
            PerformanceCounter cpuCounter = new PerformanceCounter("Processor", "% Processor Time", "_Total");
            PerformanceCounter ramCounter = new PerformanceCounter("Memory", "Available MBytes");
            Console.WriteLine(cpuCounter.NextValue() + "%");
            Console.WriteLine(ramCounter.NextValue() + "MB");
            Console.ReadLine();
            return;
            
            HorseMq mq = new HorseMq();
            mq.AddJockey(o => o.Port = 9998);

            HorseServer server = new HorseServer();
            server.UseHorseMq(mq);
            server.Run(9999);
        }
    }
}
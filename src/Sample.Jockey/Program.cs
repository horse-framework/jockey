﻿using System;
using System.Diagnostics;
using Horse.Jockey;
using Horse.Mq;
using Horse.Server;

namespace Sample.Jockey
{
    class Program
    {
        static void Main(string[] args)
        {
            HorseMq mq = new HorseMq();
            mq.AddJockey(o => o.Port = 9998);

            HorseServer server = new HorseServer();
            server.UseHorseMq(mq);
            server.Run(9999);
        }
    }
}
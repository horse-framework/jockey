using System;
using System.Collections.Generic;
using Horse.Jockey.Helpers;
using Horse.Jockey.Models;
using Horse.Mvc;
using Horse.Mvc.Controllers;
using Horse.Mvc.Filters.Route;

namespace Horse.Jockey.Controllers
{
    //[Authorize]
    [Route("api/dashboard")]
    public class DashboardController : HorseController
    {
        [HttpGet("graph")]
        public IActionResult Graph()
        {
            List<QueueGraphData> list = new List<QueueGraphData>();

            Random rnd = new Random();
            for (int i = 0; i < 60; i++)
            {
                long time = DateTime.UtcNow.AddSeconds(i - 60).ToUnixSeconds();

                list.Add(new QueueGraphData
                         {
                             Date = time,
                             Ack = rnd.Next(8, 57),
                             Nack = rnd.Next(0, 4),
                             Unack = rnd.Next(0, 8),
                             Delivery = rnd.Next(43, 104),
                             Error = rnd.Next(0, 3),
                             Pending = rnd.Next(0, 12),
                             Processing = rnd.Next(0, 1),
                             Received = rnd.Next(49, 133),
                             Sent = rnd.Next(43, 88),
                             Stored = rnd.Next(409, 782),
                             Timeout = rnd.Next(0, 18),
                             StoredPrio = rnd.Next(32, 81)
                         });
            }

            return Json(list);
        }
    }
}
using System.Linq;
using Horse.Core;
using Horse.Jockey.Core;
using Horse.Jockey.Models;
using Horse.Jockey.Models.Queues;
using Horse.Messaging.Server;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Horse.Jockey.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/dashboard")]
    public class DashboardController(HorseRider rider, JockeyOptions jockeyOptions, MessageCounter counter) 
        : ControllerBase
    {
        [HttpGet("stats")]
        public IActionResult Stats()
        {
            ServerStatistics server = ServerStatistics.Create(rider);
            HorseServerOptions serverOptions = HorseServerOptions.Create(rider);
            QueueOptionsInfo queueOptions = QueueOptionsInfo.CreateDefault(rider);

            string mainNodeHost = null;
            if (rider.Cluster.MainNode != null)
            {
                DnsResolver resolver = new DnsResolver();
                DnsInfo info = resolver.Resolve(rider.Cluster.MainNode.PublicHost);
                mainNodeHost = $"http://{info.Hostname}:{jockeyOptions.Port}";
            }

            var atc = counter.GetChannelCounter().AllTimeTotal;
            var atq = counter.GetQueueCounter().AllTimeTotal;
            var ats = counter.GetQueueStoreCounter().AllTimeTotal;
            var atd = counter.GetDirectCounter().AllTimeTotal;
            var atr = counter.GetRouterCounter().AllTimeTotal;
            
            return Ok(new
            {
                server,
                serverOptions,
                mainNodeHost,
                queueOptions,
                channelCount = rider.Channel.Channels.Count(),
                queueCount = rider.Queue.Queues.Count(),
                nodeState = rider.Cluster.State.ToString(),
                channels = new CountRecord(atc.UnixTime, atc.Received, atc.Sent, atc.Respond, atc.Error, atc.Delivered, atc.NotRouted, atc.Timeout),
                queues =  new CountRecord(atq.UnixTime, atq.Received, atq.Sent, atq.Respond, atq.Error, atq.Delivered, atq.NotRouted, atq.Timeout),
                queueStore = new CountRecord(ats.UnixTime, ats.Received, ats.Sent, ats.Respond, ats.Error, ats.Delivered, ats.NotRouted, ats.Timeout),
                direct = new CountRecord(atd.UnixTime, atd.Received, atd.Sent, atd.Respond, atd.Error, atd.Delivered, atd.NotRouted, atd.Timeout),
                router = new CountRecord(atr.UnixTime, atr.Received, atr.Sent, atr.Respond, atr.Error, atr.Delivered, atr.NotRouted, atr.Timeout)
            });
        }
    }
}
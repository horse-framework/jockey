using System.Linq;
using Horse.Core;
using Horse.Jockey.Core;
using Horse.Jockey.Models;
using Horse.Jockey.Models.Queues;
using Horse.Messaging.Server;
using Horse.Mvc;
using Horse.Mvc.Auth;
using Horse.Mvc.Controllers;
using Horse.Mvc.Filters.Route;

namespace Horse.Jockey.Controllers
{
    [Authorize]
    [Route("api/dashboard")]
    public class DashboardController : HorseController
    {
        private readonly HorseRider _rider;
        private readonly JockeyOptions _jockeyOptions;
        private readonly MessageCounter _counter;

        public DashboardController(HorseRider rider, JockeyOptions jockeyOptions, MessageCounter counter)
        {
            _rider = rider;
            _jockeyOptions = jockeyOptions;
            _counter = counter;
        }

        [HttpGet("stats")]
        public IActionResult Stats()
        {
            ServerStatistics server = ServerStatistics.Create(_rider);
            HorseServerOptions serverOptions = HorseServerOptions.Create(_rider);
            QueueOptionsInfo queueOptions = QueueOptionsInfo.CreateDefault(_rider);

            string mainNodeHost = null;
            if (_rider.Cluster.MainNode != null)
            {
                DnsResolver resolver = new DnsResolver();
                DnsInfo info = resolver.Resolve(_rider.Cluster.MainNode.PublicHost);
                mainNodeHost = $"http://{info.Hostname}:{_jockeyOptions.Port}";
            }

            var atc = _counter.GetChannelCounter().AllTimeTotal;
            var atq = _counter.GetQueueCounter().AllTimeTotal;
            var ats = _counter.GetQueueStoreCounter().AllTimeTotal;
            var atd = _counter.GetDirectCounter().AllTimeTotal;
            var atr = _counter.GetRouterCounter().AllTimeTotal;
            
            return Json(new
            {
                server,
                serverOptions,
                mainNodeHost,
                queueOptions,
                channelCount = _rider.Channel.Channels.Count(),
                queueCount = _rider.Queue.Queues.Count(),
                nodeState = _rider.Cluster.State.ToString(),
                channels = new CountRecord(atc.UnixTime, atc.Received, atc.Sent, atc.Respond, atc.Error, atc.Delivered, atc.NotRouted, atc.Timeout),
                queues =  new CountRecord(atq.UnixTime, atq.Received, atq.Sent, atq.Respond, atq.Error, atq.Delivered, atq.NotRouted, atq.Timeout),
                queueStore = new CountRecord(ats.UnixTime, ats.Received, ats.Sent, ats.Respond, ats.Error, ats.Delivered, ats.NotRouted, ats.Timeout),
                direct = new CountRecord(atd.UnixTime, atd.Received, atd.Sent, atd.Respond, atd.Error, atd.Delivered, atd.NotRouted, atd.Timeout),
                router = new CountRecord(atr.UnixTime, atr.Received, atr.Sent, atr.Respond, atr.Error, atr.Delivered, atr.NotRouted, atr.Timeout)
            });
        }
    }
}
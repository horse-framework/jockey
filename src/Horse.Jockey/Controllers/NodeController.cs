using System.Linq;
using Horse.Jockey.Helpers;
using Horse.Jockey.Models;
using Horse.Mq;
using Horse.Mvc;
using Horse.Mvc.Controllers;
using Horse.Mvc.Filters.Route;

namespace Horse.Jockey.Controllers
{
    //[Authorize]
    [Route("api/node")]
    public class NodeController : HorseController
    {
        private readonly HorseMq _mq;

        public NodeController(HorseMq mq)
        {
            _mq = mq;
        }

        [HttpGet("list")]
        public IActionResult List()
        {
            NodeListInfo model = new NodeListInfo();
            
            model.Incoming = _mq.NodeManager.IncomingNodes
                                .GetAsClone()
                                .Select(x => new IncomingNodeInfo
                                             {
                                                 Id = x.UniqueId,
                                                 Name = x.Name,
                                                 Type = x.Type,
                                                 IP = x.RemoteHost,
                                                 ConnectedDate = x.ConnectedDate.ToUnixSeconds()
                                             })
                                .ToList();

            model.Outgoing = _mq.NodeManager.OutgoingNodes
                                .Select(x => new NodeInfo
                                             {
                                                 Name = x.Options.Name,
                                                 Host = x.Options.Host,
                                                 Token = x.Options.Token,
                                                 KeepMessages = x.Options.KeepMessages,
                                                 ReconnectWait = x.Options.ReconnectWait
                                             })
                                .ToList();

            return Json(model);
        }
    }
}
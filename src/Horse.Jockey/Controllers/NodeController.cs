using System.Linq;
using Horse.Jockey.Helpers;
using Horse.Jockey.Models;
using Horse.Messaging.Server;
using Horse.Mq;
using Horse.Mvc;
using Horse.Mvc.Auth;
using Horse.Mvc.Controllers;
using Horse.Mvc.Filters.Route;

namespace Horse.Jockey.Controllers
{
	[Authorize]
	[Route("api/node")]
	internal class NodeController : HorseController
	{
		private readonly HorseRider _rider;

		public NodeController(HorseRider rider)
		{
			_rider = rider;
		}

		[HttpGet("list")]
		public IActionResult List()
		{
			NodeListInfo model = new NodeListInfo();

			model.Incoming = _rider.NodeManager.IncomingNodes
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

			model.Outgoing = _rider.NodeManager.OutgoingNodes
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
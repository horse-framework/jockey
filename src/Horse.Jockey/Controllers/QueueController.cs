using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Horse.Jockey.Core;
using Horse.Jockey.Models.Queues;
using Horse.Messaging.Server;
using Horse.Messaging.Server.Queues;
using Horse.Mvc;
using Horse.Mvc.Auth;
using Horse.Mvc.Controllers;
using Horse.Mvc.Controllers.Parameters;
using Horse.Mvc.Filters.Route;

namespace Horse.Jockey.Controllers
{
	[Authorize]
	[Route("api/queue")]
	internal class QueueController : HorseController
	{
		private readonly HorseRider _rider;
		private readonly QueueWatcherContainer _watcherContainer;

		public QueueController(HorseRider rider, QueueWatcherContainer watcherContainer)
		{
			_rider = rider;
			_watcherContainer = watcherContainer;
		}

		[HttpGet("list")]
		public IActionResult List()
		{
			List<QueueDetail> result = _rider.Queue
											 .Queues
											 .Select(queue => new QueueDetail
											  {
												  Info = HorseQueueInformation.Create(queue),
												  Stats = HorseQueueStatistics.Create(queue)
											  })
											 .ToList();

			return Json(result);
		}

		[HttpGet("get/{name}")]
		public Task<IActionResult> Get([FromRoute] string name)
		{
			HorseQueue queue = _rider.Queue.Find(name);

			if (queue == null)
				return NotFound(null);

			QueueWatcher watcher = _watcherContainer.Get(queue.Name);

			QueueDetail detail = new()
			{
				Info = HorseQueueInformation.Create(queue),
				Stats = HorseQueueStatistics.Create(queue),
				Options = QueueOptionsInfo.Create(queue),
				GraphData = watcher.GetGraphData()
			};

			return JsonAsync(detail);
		}
	}
}
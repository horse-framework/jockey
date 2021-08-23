using System.Linq;
using Horse.Jockey.Helpers;
using Horse.Jockey.Models;
using Horse.Messaging.Server;
using Horse.Mvc;
using Horse.Mvc.Auth;
using Horse.Mvc.Controllers;
using Horse.Mvc.Filters.Route;

namespace Horse.Jockey.Controllers
{
	[Authorize]
	[Route("api/router")]
	internal class RouterController : HorseController
	{
		private readonly HorseRider _rider;

		public RouterController(HorseRider rider)
		{
			_rider = rider;
		}

		[HttpGet("list")]
		public IActionResult List()
		{
			return Json(_rider.Router.Routers.Select(x => new RouterInfo
							   {
								   Name = x.Name,
								   IsEnabled = x.IsEnabled,
								   Method = x.Method.ToString(),
								   Bindings = x.GetBindings()
											   .Select(y => new BindingInfo
												{
													Name = y.Name,
													Interaction = y.Interaction.ToString(),
													Type = y.GetType().ToBindingString(),
													Priority = y.Priority,
													Target = y.Target,
													ContentType = y.ContentType
												})
							   })
							  .ToList());
		}
	}
}
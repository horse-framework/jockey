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
    [Route("api/cluster")]
    public class ClusterController : HorseController
    {
        private readonly HorseRider _rider;

        public ClusterController(HorseRider rider)
        {
            _rider = rider;
        }

        [HttpGet]
        public IActionResult Get()
        {
            ClusterInfo model = new ClusterInfo();
            model.Mode = _rider.Cluster.Options.Mode.ToString();

            model.Nodes = _rider.Cluster.Clients
                .Select(x =>
                {
                    NodeInfo info = new NodeInfo
                    {
                        Id = x.Info.Id,
                        Name = x.Info.Name,
                        Host = x.Info.Host,
                        PublicHost = x.Info.PublicHost,
                        ConnectedDate = x.ConnectedDate.ToUnixSeconds()
                    };

                    if (_rider.Cluster.MainNode?.Id == x.Info.Id)
                        info.State = "Main";
                    else if (_rider.Cluster.SuccessorNode?.Id == x.Info.Id)
                        info.State = "Main";
                    else
                        info.State = "Replica";

                    return info;
                })
                .ToList();

            return Json(model);
        }
    }
}
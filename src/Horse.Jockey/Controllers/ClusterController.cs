using System.Linq;
using Horse.Jockey.Helpers;
using Horse.Jockey.Models;
using Horse.Messaging.Server;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Horse.Jockey.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/cluster")]
    public class ClusterController(HorseRider rider) : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            ClusterInfo model = new ClusterInfo();
            model.Mode = rider.Cluster.Options.Mode.ToString();

            model.Nodes = rider.Cluster.Clients
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

                    if (rider.Cluster.MainNode?.Id == x.Info.Id)
                        info.State = "Main";
                    else if (rider.Cluster.SuccessorNode?.Id == x.Info.Id)
                        info.State = "Main";
                    else
                        info.State = "Replica";

                    return info;
                })
                .ToList();

            return Ok(model);
        }
    }
}
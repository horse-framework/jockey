using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Horse.Jockey.Models.Plugins;
using Horse.Messaging.Server;
using Horse.Messaging.Server.Plugins;
using Horse.Mvc;
using Horse.Mvc.Auth;
using Horse.Mvc.Controllers;
using Horse.Mvc.Controllers.Parameters;
using Horse.Mvc.Filters.Route;
using Horse.Mvc.Results;
using Horse.Protocols.Http.Forms;

namespace Horse.Jockey.Controllers;

[Authorize]
[Route("api/plugin")]
public class PluginController : HorseController
{
    private readonly HorseRider _rider;

    public PluginController(HorseRider rider)
    {
        _rider = rider;
    }

    [HttpGet("list")]
    public IActionResult List()
    {
        List<PluginAssemblyModel> model = new List<PluginAssemblyModel>();
        PluginAssemblyData[] dataList = _rider.Plugin.GetPluginData();

        foreach (PluginAssemblyData data in dataList)
        {
            PluginAssemblyModel assemblyModel = new PluginAssemblyModel
            {
                Fullname = data.Fullname.Contains(',') ? data.Fullname[..data.Fullname.IndexOf(',')] : data.Fullname,
                Location = data.Location,
                Version = data.AssemblyVersion,
                Plugins = new List<PluginInfoModel>(data.Plugins.Count)
            };

            foreach (PluginData pluginData in data.Plugins)
            {
                assemblyModel.Plugins.Add(new PluginInfoModel
                {
                    Name = pluginData.Name,
                    Builder = pluginData.BuilderTypeName.Contains(',') ? pluginData.BuilderTypeName[..pluginData.BuilderTypeName.IndexOf(',')] : pluginData.BuilderTypeName,
                    Disabled = pluginData.Disabled,
                    Removed = pluginData.Removed
                });
            }

            model.Add(assemblyModel);
        }

        return Json(model);
    }

    [HttpPost("load")]
    public async Task<IActionResult> Load()
    {
        IFormFile file = Request.Files.FirstOrDefault();

        string dir = $"{_rider.Options.DataPath}/plugins";
        string timestamp = DateTime.UtcNow.ToString("yyMMddHHmm");
        if (!Directory.Exists(dir))
            Directory.CreateDirectory(dir);
        
        string fullpath = $"{_rider.Options.DataPath}/plugins/{timestamp}_{file.Filename}";
        await using (FileStream stream = new FileStream(fullpath, FileMode.Create, FileAccess.Write, FileShare.Read))
        {
            file.Stream.Position = 0;
            await file.Stream.CopyToAsync(stream);
            await stream.FlushAsync();
            stream.Close();
        }

        await Task.Delay(500);
        await _rider.Plugin.AddAssemblyPlugins(fullpath);
        return await Ok(new {loaded = true});
    }

    [HttpPut("enable")]
    public async Task<IActionResult> Enable([FromBody] PluginRequestModel model)
    {
        if (string.IsNullOrWhiteSpace(model.Name))
            return new StatusCodeResult(HttpStatusCode.BadRequest);

        bool enabled = await _rider.Plugin.EnablePlugin(model.Name);

        if (!enabled)
            return new StatusCodeResult(HttpStatusCode.NotFound);

        return new StatusCodeResult(HttpStatusCode.OK);
    }

    [HttpPut("disable")]
    public async Task<IActionResult> Disable([FromBody] PluginRequestModel model)
    {
        if (string.IsNullOrWhiteSpace(model.Name))
            return new StatusCodeResult(HttpStatusCode.BadRequest);

        bool enabled = await _rider.Plugin.DisablePlugin(model.Name, false);

        if (!enabled)
            return new StatusCodeResult(HttpStatusCode.NotFound);

        return new StatusCodeResult(HttpStatusCode.OK);
    }

    [HttpPut("remove")]
    public async Task<IActionResult> Remove([FromBody] PluginRequestModel model)
    {
        if (string.IsNullOrWhiteSpace(model.Name))
            return new StatusCodeResult(HttpStatusCode.BadRequest);

        bool enabled = await _rider.Plugin.DisablePlugin(model.Name, true);

        if (!enabled)
            return new StatusCodeResult(HttpStatusCode.NotFound);

        return new StatusCodeResult(HttpStatusCode.OK);
    }
}
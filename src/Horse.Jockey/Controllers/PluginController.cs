using System;
using System.Collections.Generic;
using System.IO;
using System.IO.Compression;
using System.Linq;
using System.Threading.Tasks;
using Horse.Jockey.Models.Plugins;
using Horse.Messaging.Server;
using Horse.Messaging.Server.Plugins;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Horse.Jockey.Controllers;

[Authorize]
[ApiController]
[Route("api/plugin")]
public class PluginController(HorseRider rider) : ControllerBase
{
    [HttpGet("list")]
    public IActionResult List()
    {
        List<PluginAssemblyModel> model = new List<PluginAssemblyModel>();
        PluginAssemblyData[] dataList = rider.Plugin.GetPluginData();

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

        return Ok(model);
    }

    [HttpPost("load")]
    public async Task<IActionResult> Load()
    {
        IFormFile file = Request.Form.Files.FirstOrDefault();

        string dir = $"{rider.Options.DataPath}/plugins";
        string timestamp = DateTime.UtcNow.ToString("yyMMddHHmm");
        if (!Directory.Exists(dir))
            Directory.CreateDirectory(dir);

        string fullpath = $"{rider.Options.DataPath}/plugins/{timestamp}_{file.FileName}";
        await using (FileStream stream = new FileStream(fullpath, FileMode.Create, FileAccess.Write, FileShare.Read))
        {
            var fileStream = file.OpenReadStream();
            await fileStream.CopyToAsync(stream);
            await stream.FlushAsync();
            stream.Close();
        }

        if (file.FileName.EndsWith(".zip", StringComparison.InvariantCultureIgnoreCase)
            || file.FileName.EndsWith(".rar", StringComparison.InvariantCultureIgnoreCase)
            || file.FileName.EndsWith(".hpg", StringComparison.InvariantCultureIgnoreCase))
        {
            string name = file.FileName[..^4];
            ZipFile.ExtractToDirectory(fullpath, $"{rider.Options.DataPath}/plugins/{timestamp}_{name}");
            fullpath = $"{rider.Options.DataPath}/plugins/{timestamp}_{name}/{name}.dll";
        }

        await Task.Delay(500);
        await rider.Plugin.AddAssemblyPlugins(fullpath);
        return Ok(new {loaded = true});
    }

    [HttpPut("enable")]
    public async Task<IActionResult> Enable([FromBody] PluginRequestModel model)
    {
        if (string.IsNullOrWhiteSpace(model.Name))
            return BadRequest();

        bool enabled = await rider.Plugin.EnablePlugin(model.Name);

        if (!enabled)
            return NotFound();

        return Ok();
    }

    [HttpPut("disable")]
    public async Task<IActionResult> Disable([FromBody] PluginRequestModel model)
    {
        if (string.IsNullOrWhiteSpace(model.Name))
            return BadRequest();

        bool enabled = await rider.Plugin.DisablePlugin(model.Name, false);

        if (!enabled)
            return NotFound();

        return Ok();
    }

    [HttpPut("remove")]
    public async Task<IActionResult> Remove([FromBody] PluginRequestModel model)
    {
        if (string.IsNullOrWhiteSpace(model.Name))
            return BadRequest();

        bool enabled = await rider.Plugin.DisablePlugin(model.Name, true);

        if (!enabled)
            return NotFound();

        return Ok();
    }
}
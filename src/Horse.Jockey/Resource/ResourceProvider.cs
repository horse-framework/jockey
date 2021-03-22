using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Horse.Mvc;
using Horse.Mvc.Middlewares;
using Horse.Mvc.Results;

namespace Horse.Jockey.Resource
{
    public class ResourceProvider
    {
        private readonly Dictionary<string, ResourceInfo> _resources = new(StringComparer.InvariantCultureIgnoreCase);

        public async Task Load()
        {
            ResourceBuilder builder = new ResourceBuilder();
            List<ResourceInfo> resources = await builder.Build();

            _resources.Clear();
            foreach (ResourceInfo resource in resources)
                _resources.Add(resource.VirtualPath, resource);
        }

        public void Use(IMvcAppBuilder app)
        {
            foreach (KeyValuePair<string, ResourceInfo> pair in _resources)
            {
                ResourceInfo info = pair.Value;
                app.UseActionRoute(info.VirtualPath, request => HandleRequest(info));

                if (info.VirtualPath.Equals("/index.html", StringComparison.InvariantCultureIgnoreCase))
                {
                    app.UseActionRoute("/", request => HandleRequest(info));
                    Hub.Mvc.NotFoundResult = HandleRequest(info).GetAwaiter().GetResult();
                }
            }
        }

        private async Task<IActionResult> HandleRequest(ResourceInfo resource)
        {
            IActionResult result;

            switch (resource.FileExtension)
            {
                case "TXT":
                    result = new StringResult(Encoding.UTF8.GetString(resource.Data));
                    break;

                case "CSS":
                    result = new CssResult(resource.Data);
                    break;

                case "JS":
                    result = new JsResult(resource.Data);
                    break;

                case "SVG":
                case "ICO":
                case "PNG":
                case "GIF":
                case "JPG":
                case "JPEG":
                    result = new ImageResult(resource.Filename, resource.Data);
                    break;

                default:
                    result = new HtmlResult(resource.Data);
                    break;
            }

            return result;
        }
    }
}
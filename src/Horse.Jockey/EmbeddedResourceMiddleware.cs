using System;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace Horse.Jockey;

public class EmbeddedResourceMiddleware(RequestDelegate next)
{
    private static string[] _resourcePathList;
    private static Assembly _embeddedResourceAssembly;
    private const string ResourcePrefix = "Horse.Jockey.Web";

    public async Task Invoke(HttpContext context)
    {
        var path = context.Request.Path.Value?.TrimStart('/');
        if (string.IsNullOrEmpty(path))
            path = "index.html";

        if (_embeddedResourceAssembly == null)
        {
            _embeddedResourceAssembly = Assembly.GetExecutingAssembly();
            string[] resourceNames = _embeddedResourceAssembly.GetManifestResourceNames();

            _resourcePathList = resourceNames
                .Select(x => x.Replace("Horse.Jockey.Web.", ""))
                .ToArray();
        }

        if (path.StartsWith("api/", StringComparison.InvariantCultureIgnoreCase))
        {
            await next(context);
            return;
        }

        if (!_resourcePathList.Contains(path.Replace('/', '.')))
            path = "index.html";

        string key = ResourcePrefix + '.' + path.Replace('/', '.');
        await using var stream = _embeddedResourceAssembly.GetManifestResourceStream(key);

        if (stream != null)
        {
            var contentType = path.EndsWith(".js") ? "application/javascript" :
                path.EndsWith(".css") ? "text/css" :
                path.EndsWith(".svg") ? "image/svg+xml" :
                path.EndsWith(".html") ? "text/html" : "application/octet-stream";

            context.Response.ContentType = contentType;
            await stream.CopyToAsync(context.Response.Body);
            return;
        }

        await next(context);
    }
}
using System;
using System.Collections.Generic;
using System.IO;
using System.Reflection;
using System.Threading.Tasks;

namespace Horse.Jockey.Resource
{
    internal class ResourceBuilder
    {
        private const string PREFIX = "Horse.Jockey.Web.";

        public async Task<List<ResourceInfo>> Build()
        {
            List<ResourceInfo> resources = new List<ResourceInfo>();
            Assembly assembly = typeof(ResourceBuilder).GetTypeInfo().Assembly;

            foreach (string fullname in assembly.GetManifestResourceNames())
            {
                if (!fullname.StartsWith(PREFIX))
                    continue;

                string name = fullname.Substring(PREFIX.Length);

                Stream resource = assembly.GetManifestResourceStream(fullname);
                if (resource == null)
                    continue;

                ResourceInfo info = new ResourceInfo();
                info.ResourceName = fullname;
                info.VirtualPath = NameToVirtualPath(name);
                info.Data = new byte[resource.Length];

                int li = info.VirtualPath.LastIndexOf('/');
                if (li < 0)
                    info.Filename = info.VirtualPath;
                else
                    info.Filename = info.VirtualPath.Substring(li + 1);

                if (name.Contains('.'))
                    info.FileExtension = name.Substring(name.LastIndexOf('.') + 1).ToUpperInvariant();

                await resource.ReadAsync(info.Data, 0, info.Data.Length);

                resources.Add(info);
            }

            return resources;
        }

        private string NameToVirtualPath(string resourceName)
        {
            if (resourceName.StartsWith("assets.", StringComparison.InvariantCultureIgnoreCase))
                return "/assets/" + resourceName.Substring(7);

            return resourceName.StartsWith("/") ? resourceName : "/" + resourceName;
        }
    }
}
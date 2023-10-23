using System;
using System.IO;
using System.Text;

namespace EmbedResSync
{
    class Program
    {
        static void Main(string[] args)
        {
            string dir = Environment.CurrentDirectory;
            dir += "/../../../..";
            dir += "/Horse.Jockey";

            string csproj = dir + "/Horse.Jockey.csproj";

            string content = File.ReadAllText(csproj);
            int lastItemGroup = content.LastIndexOf("<ItemGroup>", StringComparison.OrdinalIgnoreCase);

            StringBuilder builder = new StringBuilder();
            builder.Append(content.Substring(0, lastItemGroup));
            builder.AppendLine("<ItemGroup>");
            
            foreach (string file in Directory.GetFiles(dir + "/Web"))
            {
                int index = file.IndexOf("/Horse.Jockey/", StringComparison.OrdinalIgnoreCase);
                string fileName = file.Substring(index + 14);
                builder.AppendLine($"        <EmbeddedResource Include=\"{fileName}\" />");
            }
            
            foreach (string file in Directory.GetFiles(dir + "/Web/assets"))
            {
                int index = file.IndexOf("/Horse.Jockey/", StringComparison.OrdinalIgnoreCase);
                string fileName = file.Substring(index + 14);
                builder.AppendLine($"        <EmbeddedResource Include=\"{fileName}\" />");
            }

            builder.AppendLine("    </ItemGroup>");
            builder.AppendLine("</Project>");

            string newContent = builder.ToString();
            File.WriteAllText(csproj, newContent);
            Console.WriteLine("Done!");
        }
    }
}
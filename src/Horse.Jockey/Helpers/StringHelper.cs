using System;
using System.Collections.Generic;

namespace Horse.Jockey.Helpers
{
    internal static class StringHelper
    {
        internal static Dictionary<string, string> ParseQuerystring(this string path)
        {
            int start = path.IndexOf('?');

            string querystring;
            if (start >= 0)
                querystring = path.Substring(start + 1);
            else
                querystring = path;

            Dictionary<string, string> values = new Dictionary<string, string>(StringComparer.InvariantCultureIgnoreCase);

            string[] pairs = querystring.Split('&');
            foreach (string pair in pairs)
            {
                string[] keyValue = pair.Split('=');
                if (keyValue.Length != 2)
                    continue;

                values.Add(keyValue[0], keyValue[1]);
            }

            return values;
        }
    }
}
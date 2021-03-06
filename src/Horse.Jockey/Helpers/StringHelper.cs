using System;
using System.Collections.Generic;
using System.ComponentModel;

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

        internal static string ToBindingString(this Type type)
        {
            string name = type.Name;
            if (name.EndsWith("Binding"))
                name = name.Substring(0, name.Length - 7);

            return name;
        }

        internal static bool AsteriskEquals(this string value, string searchKey)
        {
            if (string.IsNullOrEmpty(searchKey))
                return false;

            if (searchKey == "*")
                return true;
            
            if (searchKey.StartsWith('*') && searchKey.EndsWith('*'))
                return value.Contains(searchKey.Substring(1, searchKey.Length - 2), StringComparison.InvariantCultureIgnoreCase);

            if (searchKey.StartsWith('*'))
                return value.EndsWith(searchKey.Substring(1), StringComparison.InvariantCultureIgnoreCase);

            if (searchKey.EndsWith('*'))
                return value.StartsWith(searchKey.Substring(0, searchKey.Length - 1), StringComparison.InvariantCultureIgnoreCase);

            return value.Equals(searchKey, StringComparison.InvariantCultureIgnoreCase);
        }

        public static T EnumValueFromDescription<T>(this string description) where T : Enum
        {
            foreach (var field in typeof(T).GetFields())
            {
                if (Attribute.GetCustomAttribute(field, typeof(DescriptionAttribute)) is DescriptionAttribute attribute)
                {
                    if (attribute.Description == description)
                        return (T) field.GetValue(null);
                }
                else
                {
                    if (field.Name == description)
                        return (T) field.GetValue(null);
                }
            }

            throw new ArgumentException("Not found.", nameof(description));
        }
    }
}
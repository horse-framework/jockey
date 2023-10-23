using System.Collections.Generic;

namespace Horse.Jockey.Models;

public class HorseMessageModel
{
    public string Id { get; set; }
    public string Type { get; set; }
    public string Source { get; set; }
    public string Target { get; set; }
    public bool HighPriority { get; set; }
    public bool WaitForResponse { get; set; }
    public ushort ContentType { get; set; }
    public string Content { get; set; }
    public IEnumerable<KeyValuePair<string,string>> Headers { get; set; }
}
namespace Horse.Jockey.Models;

public class SetCacheModel
{
    public string Key { get; set; }
    public string Content { get; set; }
    
    /// <summary>
    /// In seconds
    /// </summary>
    public int Duration { get; set; }
    
    /// <summary>
    /// In seconds
    /// </summary>
    public int ExpirationWarning { get; set; }

    public string[] Tags { get; set; }
}
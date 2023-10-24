namespace Horse.Jockey.Models;

public class CreateChannelModel
{
    public string Name { get; set; }
    public bool AutoDestroy { get; set; }
    public int ClientLimit { get; set; }
    public ulong MessageSizeLimit { get; set; }
    public int AutoDestroyIdleSeconds { get; set; }
    public bool SendLastMessageAsInitial { get; set; }
    public string Topic { get; set; }
}
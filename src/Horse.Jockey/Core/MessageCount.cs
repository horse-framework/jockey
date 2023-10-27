namespace Horse.Jockey.Core;

internal struct MessageCount
{
    public long UnixTime;
    public long Received;
    public long Sent;
    public long Respond;
    public long Error;
    public long Delivered;
    public long NotRouted;
    public long Timeout;
};
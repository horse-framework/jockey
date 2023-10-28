using System;
using Horse.Jockey.Helpers;

namespace Horse.Jockey.Core;

internal class MessageCount
{
    public long UnixTime;
    public long Received;
    public long Sent;
    public long Respond;
    public long Error;
    public long Delivered;
    public long NotRouted;
    public long Timeout;

    public MessageCount()
    {
        UnixTime = DateTime.UtcNow.ToUnixSeconds();
    }
};
using System;
using System.Collections.Generic;
using Horse.Jockey.Helpers;

namespace Horse.Jockey.Core;

public class CountableObject
{
    internal string Name { get; }

    private MessageCount _curent;
    private MessageCount _latest;

    internal MessageCount AllTimeTotal { get; private set; } = new MessageCount();

    /// <summary>
    /// 1 Record for per 5 seconds
    /// </summary>
    private readonly Queue<MessageCount> _messages = new Queue<MessageCount>(60);

    internal CountableObject(string name)
    {
        Name = name;
        _curent = new MessageCount();
    }

    public IEnumerable<MessageCount> GetData() => _messages;
    internal MessageCount GetCurrent() => _curent;

    internal void Tick(MessageCount recent, bool calculateDifference = true)
    {
        if (recent != null)
        {
            MessageCount count = _latest != null && calculateDifference ? FindDifference(recent, _latest) : recent;
            _messages.Enqueue(count);
            _latest = recent;
            _curent = count;
            AllTimeTotal = recent;
        }
        else
        {
            AllTimeTotal.UnixTime = DateTime.UtcNow.ToUnixSeconds();
            AllTimeTotal.Received += _curent.Received;
            AllTimeTotal.NotRouted += _curent.NotRouted;
            AllTimeTotal.Delivered += _curent.Delivered;
            AllTimeTotal.Error += _curent.Error;
            AllTimeTotal.Sent += _curent.Sent;
            AllTimeTotal.Respond += _curent.Respond;
            AllTimeTotal.Timeout += _curent.Timeout;

            _curent = new MessageCount();
            _messages.Enqueue(_curent);
        }

        if (_messages.Count > 60)
            _messages.Dequeue();
    }

    private static MessageCount FindDifference(MessageCount next, MessageCount previous)
    {
        return new MessageCount
        {
            UnixTime = DateTime.UtcNow.ToUnixSeconds(),
            Delivered = next.Delivered - previous.Delivered,
            Error = next.Error - previous.Error,
            Received = next.Received - previous.Received,
            Respond = next.Respond - previous.Respond,
            NotRouted = next.NotRouted - previous.NotRouted,
            Sent = next.Sent - previous.Sent,
            Timeout = next.Timeout - previous.Timeout
        };
    }
}
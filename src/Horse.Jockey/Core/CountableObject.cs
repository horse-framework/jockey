using System;
using System.Collections.Generic;
using Horse.Jockey.Helpers;

namespace Horse.Jockey.Core;

internal class CountableObject
{
    internal string Name { get; }

    private int _minCounter;
    private int _min10Counter;

    private MessageCount _latest10Min;
    private MessageCount _latest3Hours;
    private MessageCount _curent;
    private MessageCount _latest;

    internal MessageCount AllTimeTotal { get; private set; } = new MessageCount();

    /// <summary>
    /// 1 Record for per 5 seconds
    /// </summary>
    private readonly Queue<MessageCount> _lastMin = new Queue<MessageCount>(12);

    /// <summary>
    /// 1 Record for per 1 minute
    /// </summary>
    private readonly Queue<MessageCount> _last10Mins = new Queue<MessageCount>(10);

    /// <summary>
    /// 1 Record for per 10 minutes
    /// </summary>
    private readonly Queue<MessageCount> _last3Hours = new Queue<MessageCount>(18);

    public IEnumerable<MessageCount> LastMin => _lastMin;
    public IEnumerable<MessageCount> Last10Mins => _last10Mins;
    public IEnumerable<MessageCount> Last3Hours => _last3Hours;

    internal CountableObject(string name)
    {
        Name = name;
        _curent = new MessageCount();
    }

    public IEnumerable<MessageCount> GetDataByResolution(string resolution)
    {
        switch (resolution)
        {
            case "1m":
                return _lastMin;
            case "10m":
                return _last10Mins;
            case "3h":
                return _last3Hours;
            default:
                return Array.Empty<MessageCount>();
        }
    }

    internal MessageCount GetCurrent() => _curent;
    internal MessageCount GetLastOfTenMins() => _latest10Min;
    internal MessageCount GetLastOf3Hours() => _latest3Hours;

    internal MessageCount GetCurrentByResolution(string resolution)
    {
        return resolution switch
        {
            "10m" => _latest10Min,
            "3h" => _latest3Hours,
            _ => _curent
        };
    }

    internal void Tick(MessageCount recent, bool calculateDifference = true)
    {
        if (_minCounter == 12)
        {
            MessageCount[] items = _lastMin.ToArray();
            _latest10Min = FindTotalsOf(items);
            _minCounter = 0;
            _lastMin.Clear();

            _min10Counter++;
            _last10Mins.Enqueue(_latest10Min);

            if (_min10Counter == 10)
            {
                MessageCount[] bigItems = _last10Mins.ToArray();
                _latest3Hours = FindTotalsOf(bigItems);
                _last3Hours.Enqueue(_latest3Hours);
                _min10Counter = 0;
                _last10Mins.Clear();

                while (_last3Hours.Count > 18)
                    _last3Hours.Dequeue();
            }
        }

        if (recent != null)
        {
            MessageCount count = _latest != null && calculateDifference ? FindDifference(recent, _latest) : recent;
            _lastMin.Enqueue(count);
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
            _lastMin.Enqueue(_curent);
        }

        _minCounter++;
    }

    private static MessageCount FindTotalsOf(IEnumerable<MessageCount> items)
    {
        MessageCount result = new MessageCount
        {
            UnixTime = DateTime.UtcNow.ToUnixSeconds()
        };

        foreach (MessageCount item in items)
        {
            result.Received += item.Received;
            result.NotRouted += item.NotRouted;
            result.Delivered += item.Delivered;
            result.Error += item.Error;
            result.Sent += item.Sent;
            result.Respond += item.Respond;
            result.Timeout += item.Timeout;
        }

        return result;
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
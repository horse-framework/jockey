﻿using Horse.Messaging.Plugins;
using Horse.Messaging.Protocol;

namespace Sample.JockeyPlugin;

public class SampleJockeyPluginRequestHandler : IHorsePluginHandler
{
    public Task Execute(HorsePluginContext context)
    {
        HorseMessage response = context.Request.CreateResponse(HorseResultCode.Ok);
        response.SetStringContent("This is a response message for the plugin request");
        context.Response = response;
        return Task.CompletedTask;
    }
}
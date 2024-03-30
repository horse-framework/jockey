using Horse.Messaging.Plugins;

namespace Sample.JockeyPlugin;

public class SampleJockeyPlugin : HorsePlugin
{
    public SampleJockeyPlugin()
    {
        Name = "SampleJockeyPlugin";
    }

    public override Task Initialize()
    {
        AddRequestHandler(new SampleJockeyPluginRequestHandler());
        return Task.CompletedTask;
    }
}
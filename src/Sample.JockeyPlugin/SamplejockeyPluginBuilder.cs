using Horse.Messaging.Plugins;

namespace Sample.JockeyPlugin;

public class SamplejockeyPluginBuilder : IHorsePluginBuilder
{
    public string GetName() => "SampleJockeyPlugin";

    public HorsePlugin Build()
    {
        return new SampleJockeyPlugin();
    }
}
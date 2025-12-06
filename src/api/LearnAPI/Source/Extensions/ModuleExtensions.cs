namespace LearnAPI.Source.Extensions;
public static class ModuleExtensions
{
    public static void AddInfrastrutureExtensions(this WebApplicationBuilder builder)
    {
        builder.AddInfrastruture();
        builder.AddApplication();
    }

    public static void UseInfrastrutureExtensions(this WebApplication app)
    {
        app.UseDbExtensions();
    }
}

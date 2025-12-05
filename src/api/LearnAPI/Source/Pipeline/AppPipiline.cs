namespace LearnAPI.Source.Pipeline;
public static class AppPipiline
{
    public static void UseAppPipelines(this WebApplication app)
    {
        app.UseHttpsRedirection();
        app.UseEndpoint();
        app.UseInfrastrutureExtensions();
        app.UseCorsExtensions();
        app.UseSwaggerExtensions();
        app.Run();
    }
}
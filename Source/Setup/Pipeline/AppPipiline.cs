namespace FrapiRest.Source.Setup.Pipeline;
public static class AppPipiline
{
    public static void UseAppPipelines(this WebApplication app)
    {
        app.UseSweggerExtensions();
        app.UseHttpsRedirection();
        app.UseCorsExtensions();
        app.UseAuthorization();
        app.MapControllers();
        app.UseDbExtensions();
        app.Run("http://0.0.0.0:5108");
    }
}
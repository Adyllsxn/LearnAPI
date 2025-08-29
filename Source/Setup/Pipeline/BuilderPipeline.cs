namespace FrapiRest.Source.Setup.Pipeline;
public static class BuilderPipeline
{
    public static void AddBuildPipelines(this WebApplicationBuilder builder)
    {
        builder.AddControllersExtensions();
        builder.AddCorsExtensions();
        builder.AddDbExtensions();
        builder.AddDIExtensions();
        builder.AddSwaggerExtensions();
    }
}

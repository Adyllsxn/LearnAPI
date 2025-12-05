namespace LearnAPI.Source.Pipeline;
public  static class BuilderPipeline
{
    public static void AddBuildPipelines(this WebApplicationBuilder builder)
    {
        builder.AddConfigExtensions();
        builder.AddInfrastrutureExtensions();
        builder.AddCorsExtensions();
        builder.AddSwaggerExtensions();
    }
}

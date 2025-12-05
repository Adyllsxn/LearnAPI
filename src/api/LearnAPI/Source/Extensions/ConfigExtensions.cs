namespace LearnAPI.Source.Extensions;
public static class ConfigExtensions
{
    public static void AddConfigExtensions(this WebApplicationBuilder builder)
    {
        builder.Services.AddEndpointsApiExplorer();
    }
    public static void UseEndpoint(this WebApplication endpoint)
    {
        endpoint.MapUserEndpoints();
    }
}

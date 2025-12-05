namespace LearnAPI.Source.Extensions;
public static class CorsExtensions
{
    public static void AddCorsExtensions(this WebApplicationBuilder builder)
    {
        builder.Services.AddCors(options =>
        {
            options.AddPolicy("AllowAll", policy =>
            {
                policy
                    .AllowAnyOrigin()
                    .AllowAnyMethod()
                    .AllowAnyHeader();
            });
        });
    }

    public static void UseCorsExtensions(this WebApplication app)
    {
        app.UseCors("AllowAll");
    }
}

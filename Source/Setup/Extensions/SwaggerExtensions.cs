namespace FrapiRest.Source.Setup.Extensions;
public static class SwaggerExtensions
{
    public static void AddSwaggerExtensions(this WebApplicationBuilder builder)
    {
        builder.Services.AddSwaggerGen(
            c =>
                {
                    c.SwaggerDoc("v1", new OpenApiInfo{
                        Title = "Frapi Rest",
                        Version = "v1",
                        Description = "A ready-to-run mock REST API built with ASP.NET Core. Designed for frontend developers to practice CRUD operations without setting up a backend. Offline, lightweight, and fast. Perfect for testing and learning frontend integrations."
                    });
                }
        );
    }

    public static void UseSweggerExtensions(this WebApplication app)
    {
        if(app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI(c =>
                {
                    c.SwaggerEndpoint("/swagger/v1/swagger.json", "Frapi Rest v1");
                    c.ConfigObject.AdditionalItems["locale"] = "en";
                });
            }
    }
}
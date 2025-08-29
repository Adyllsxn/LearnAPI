namespace FrapiRest.Source.Setup.Extensions;
public static class DbExtensions
{
    public static void AddDbExtensions(this WebApplicationBuilder builder)
    {
        builder.Services.AddDbContext<AppDbContext>(options => options.UseInMemoryDatabase("FrapiDb"));
    }

    public static void UseDbExtensions(this WebApplication app)
    {
        using (var scope = app.Services.CreateScope())
        {
            var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();
            db.Database.EnsureCreated(); // Aplica o HasData
        }
    }
}
namespace LearnAPI.Source.Core.Infrastructure.Modules;
public static class InfrastructureModule
{
    public static void AddInfrastruture(this WebApplicationBuilder builder)
    {
        builder.Services.AddDbContext<AppDbContext>(options => options.UseInMemoryDatabase("FrapiDb"));
        builder.Services.AddScoped<IUserRepository, UserRepository>();
    }
    public static void UseDbExtensions(this WebApplication app)
    {
        using (var scope = app.Services.CreateScope())
        {
            var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();
            db.Database.EnsureCreated();
        }
    }
}

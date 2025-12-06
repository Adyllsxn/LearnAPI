namespace LearnAPI.Source.Core.Application.Modules;
public static class ApplicationModule
{
    public static void AddApplication(this WebApplicationBuilder builder)
    {
        builder.Services.AddScoped<IUserService, UserService>();
    }
}

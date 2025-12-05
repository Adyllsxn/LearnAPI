namespace LearnAPI.Source.Extensions;
public static class SwaggerExtensions
{
    public static void AddSwaggerExtensions(this WebApplicationBuilder builder)
    {
        builder.Services.AddSwaggerGen(c =>
        {
            c.SwaggerDoc("v1", new OpenApiInfo
            {
                Title = "LearnAPI - Educational & Portfolio API",
                Version = "v1",
                Description = @"## 📚 LearnAPI - Educational & Portfolio Project

**Technologies:** .NET 10, Entity Framework Core (InMemory), Minimal API, Swagger/OpenAPI

### 🏗️ **Main Domains**
- **User Management:** Full CRUD operations with domain-driven validations
- **Learning System:** Endpoints designed to practice clean architecture and modern backend patterns
- **Documentation:** Enriched Swagger setup for clarity, learning, and professional presentation

### ✨ **Key Features**
- Modular and scalable architecture
- InMemory database for fast testing and prototyping
- Clear separation of concerns following clean architecture principles
- Interactive Swagger UI for exploring and testing endpoints"
            });
        });
    }

    public static void UseSwaggerExtensions(this WebApplication app)
    {
        app.UseSwagger();
        app.UseSwaggerUI(c =>
        {
            c.SwaggerEndpoint("/swagger/v1/swagger.json", "LearnAPI v1");
            c.DocumentTitle = "LearnAPI - API Documentation";
            c.RoutePrefix = string.Empty;
        });
    }
}

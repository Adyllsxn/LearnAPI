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
- **User Management:** Full CRUD for users with domain validations
- **Learning System:** Endpoints for studying and practicing clean architecture
- **Documentation:** Enriched Swagger for learning and presentation


### 🌐 **Available Endpoints**

#### 🔎 Read
- **GET** → `http://localhost:5047/api/users` → List all users  
- **GET** → `http://localhost:5047/api/users/{id}` → Get user by ID  
- **GET** → `http://localhost:5047/api/users/search?name={name}` → Search users by first name  

#### ✍️ Write
- **POST** → `http://localhost:5047/api/users` → Create a new user  
- **PUT** → `http://localhost:5047/api/users` → Update an existing user  
- **DELETE** → `http://localhost:5047/api/users/{id}` → Delete user by ID"
            });
        });
    }

    public static void UseSwaggerExtensions(this WebApplication app)
    {
        if (app.Environment.IsDevelopment())
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
}

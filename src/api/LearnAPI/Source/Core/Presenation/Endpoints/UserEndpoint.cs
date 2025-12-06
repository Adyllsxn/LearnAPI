namespace LearnAPI.Source.Core.Presenation.Endpoints;
public static class UserEndpoint
{
    public static void MapUserEndpoints(this WebApplication app)
    {
        #region GetAll
        app.MapGet("/api/users", async ([FromServices] IUserService service) =>
        {
            var users = await service.GetAll();
            return Results.Ok(users);
        })
        .WithSummary("List all users")
        .WithTags("Users.Read");
        #endregion

        #region GetById
        app.MapGet("/api/users/{id}", async ([FromServices] IUserService service, Guid id) =>
        {
            var user = await service.GetById(id);
            return user is null ? Results.NotFound("User not found") : Results.Ok(user);
        })
        .WithSummary("Get user by ID")
        .WithTags("Users.Read");
        #endregion

        #region GetByName
        app.MapGet("/api/users/search", async ([FromServices] IUserService service, string name) =>
        {
            var result = await service.GetByName(name);
            return Results.Ok(result);
        })
        .WithSummary("Search users by first name")
        .WithTags("Users.Read");
        #endregion

        #region Create
        app.MapPost("/api/users", async ([FromServices] IUserService service, CreateUserDto userDto) =>
        {
            var created = await service.Create(userDto);
            return Results.Created($"/api/users/{created.Id}", created);
        })
        .WithSummary("Create a new user")
        .WithTags("Users.Write");
        #endregion

        #region Update
        app.MapPut("/api/users", async ([FromServices] IUserService service, UpdateUserDto userDto) =>
        {
            var updated = await service.Update(userDto);
            return updated ? Results.Ok(userDto) : Results.NotFound("User not found");
        })
        .WithSummary("Edit user data")
        .WithTags("Users.Write");
        #endregion

        #region Delete
        app.MapDelete("/api/users/{id}", async ([FromServices] IUserService service, Guid id) =>
        {
            var deleted = await service.Delete(id);
            return deleted ? Results.NoContent() : Results.NotFound("User not found");
        })
        .WithSummary("Delete user by ID")
        .WithTags("Users.Write");
        #endregion

    }
}

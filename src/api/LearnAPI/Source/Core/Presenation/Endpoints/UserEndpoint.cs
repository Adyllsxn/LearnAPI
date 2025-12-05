namespace LearnAPI.Source.Core.Presenation.Endpoints;
public static class UserEndpoint
{
    public static void MapUserEndpoints(this WebApplication app)
    {
        #region GetAll
        app.MapGet("/api/users", async ([FromServices] IUserRepository repository) =>
        {
            var users = await repository.GetAllAsync();
            return Results.Ok(users);
        })
        .WithSummary("List all users")
        .WithTags("Users.Read");
        #endregion

        #region GetById
        app.MapGet("/api/users/{id}", async ([FromServices] IUserRepository repository, Guid id) =>
        {
            var user = await repository.GetByIdAsync(id);
            return user is null ? Results.NotFound("User not found") : Results.Ok(user);
        })
        .WithSummary("Get user by ID")
        .WithTags("Users.Read");
        #endregion

        #region GetByName
        app.MapGet("/api/users/search", async ([FromServices] IUserRepository repository, string name) =>
        {
            var result = await repository.GetByNameAsync(name);
            return Results.Ok(result);
        })
        .WithSummary("Search users by first name")
        .WithTags("Users.Read");
        #endregion

        #region Create
        app.MapPost("/api/users", async ([FromServices] IUserRepository repository, CreateUserDto userDto) =>
        {
            var model = new UserEntity(
                userDto.FirstName,
                userDto.LastName,
                userDto.Email
            );
            var created = await repository.CreateAsync(model);
            return Results.Created($"/api/users/{created.Id}", created);
        })
        .WithSummary("Create a new user")
        .WithTags("Users.Write");
        #endregion

        #region Update
        app.MapPut("/api/users", async ([FromServices] IUserRepository repository, UpdateUserDto userDto) =>
        {
            var existing = await repository.GetByIdAsync(userDto.Id);
            if (existing is null)
                return Results.NotFound("User not found");

            existing.Update(userDto.FirstName, userDto.LastName, userDto.Email);

            var updated = await repository.UpdateAsync(existing);
            return updated ? Results.Ok(existing) : Results.NotFound("User not found");
        })
        .WithSummary("Edit user data")
        .WithTags("Users.Write");
        #endregion

        #region Delete
        app.MapDelete("/api/users/{id}", async ([FromServices] IUserRepository repository, Guid id) =>
        {
            var deleted = await repository.DeleteAsync(id);
            return deleted ? Results.NoContent() : Results.NotFound("User not found");
        })
        .WithSummary("Delete user by ID")
        .WithTags("Users.Write");
        #endregion
    }
}

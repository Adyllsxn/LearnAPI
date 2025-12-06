namespace LearnAPI.Tests.Unity.Repositories;
public class UserRepositoryTests
{
    #region GetDbContext
    private AppDbContext GetDbContext()
    {
        var options = new DbContextOptionsBuilder<AppDbContext>()
            .UseInMemoryDatabase(Guid.NewGuid().ToString())
            .Options;

        return new AppDbContext(options);
    }
    #endregion

    #region CreateAsync
    [Fact]
    public async Task CreateAsync_ShouldAddUser()
    {
        var context = GetDbContext();
        var repo = new UserRepository(context);

        var user = new UserEntity("Domingos", "Silva", "domingos@email.com");
        var result = await repo.CreateAsync(user);

        Assert.NotNull(result);
        Assert.Single(context.Users);
    }
    #endregion

    #region DeleteAsync_ShouldRemoveUser
    [Fact]
    public async Task DeleteAsync_ShouldRemoveUser_WhenExists()
    {
        var context = GetDbContext();
        var repo = new UserRepository(context);

        var user = new UserEntity("Domingos", "Silva", "domingos@email.com");
        context.Users.Add(user);
        await context.SaveChangesAsync();

        var deleted = await repo.DeleteAsync(user.Id);

        Assert.True(deleted);
        Assert.Empty(context.Users);
    }
    #endregion

    #region DeleteAsync_ShouldReturnFalse
    [Fact]
    public async Task DeleteAsync_ShouldReturnFalse_WhenNotExists()
    {
        var context = GetDbContext();
        var repo = new UserRepository(context);

        var deleted = await repo.DeleteAsync(Guid.NewGuid());

        Assert.False(deleted);
    }
    #endregion

    #region Update
    [Fact]
    public async Task UpdateAsync_ShouldModifyUser_WhenExists()
    {
        var context = GetDbContext();
        var repo = new UserRepository(context);

        var user = new UserEntity("Domingos", "Silva", "domingos@email.com");
        context.Users.Add(user);
        await context.SaveChangesAsync();

        user.Update("Carlos", "Pereira", "carlos@email.com");
        var updated = await repo.UpdateAsync(user);

        Assert.True(updated);
        var dbUser = await context.Users.FindAsync(user.Id);
        Assert.Equal("Carlos", dbUser?.FirstName);
    }
    #endregion

    #region GetByIdAsync
    [Fact]
    public async Task GetByIdAsync_ShouldReturnUser_WhenExists()
    {
        var context = GetDbContext();
        var repo = new UserRepository(context);

        var user = new UserEntity("Domingos", "Silva", "domingos@email.com");
        context.Users.Add(user);
        await context.SaveChangesAsync();

        var result = await repo.GetByIdAsync(user.Id);

        Assert.NotNull(result);
        Assert.Equal(user.Id, result.Id);
    }
    #endregion

    #region GetByNameAsync
    [Fact]
    public async Task GetByNameAsync_ShouldReturnMatchingUsers()
    {
        var context = GetDbContext();
        var repo = new UserRepository(context);

        context.Users.Add(new UserEntity("Domingos", "Silva", "domingos@email.com"));
        context.Users.Add(new UserEntity("Carlos", "Pereira", "carlos@email.com"));
        await context.SaveChangesAsync();

        var results = await repo.GetByNameAsync("Domingos");

        Assert.Single(results);
        Assert.Equal("Domingos", results[0].FirstName);
    }
    #endregion

    #region GetAllAsync
    [Fact]
    public async Task GetAllAsync_ShouldReturnAllUsers()
    {
        var context = GetDbContext();
        var repo = new UserRepository(context);

        context.Users.Add(new UserEntity("Domingos", "Silva", "domingos@email.com"));
        context.Users.Add(new UserEntity("Carlos", "Pereira", "carlos@email.com"));
        await context.SaveChangesAsync();

        var results = await repo.GetAllAsync();

        Assert.Equal(2, results.Count);
        Assert.Contains(results, u => u.FirstName == "Domingos");
        Assert.Contains(results, u => u.FirstName == "Carlos");
    }
    #endregion
}

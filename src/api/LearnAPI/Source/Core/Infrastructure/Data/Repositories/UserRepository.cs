namespace LearnAPI.Source.Core.Infrastructure.Data.Repositories;
public class UserRepository(AppDbContext context) : IUserRepository
{
    #region Create
    public async Task<UserEntity> CreateAsync(UserEntity user)
    {
        context.Users.Add(user);
        await context.SaveChangesAsync();
        return user;
    }
    #endregion

    #region Delete
    public async Task<bool> DeleteAsync(Guid idUser)
    {
        var user = await context.Users.FindAsync(idUser);
        if (user == null) return false;

        context.Users.Remove(user);
        await context.SaveChangesAsync();
        return true;
    }
    #endregion

    #region Update
    public async Task<bool> UpdateAsync(UserEntity user)
    {
        var existing = await context.Users.FindAsync(user.Id);
        if (existing == null) return false;

        existing.Update(user.FirstName, user.LastName, user.Email);

        await context.SaveChangesAsync();
        return true;
    }
    #endregion
    
    #region GetAll
    public async Task<List<UserEntity>> GetAllAsync()
    {
        return await context.Users.ToListAsync();
    }
    #endregion

    #region GetById
    public async Task<UserEntity?> GetByIdAsync(Guid idUser)
    {
        return await context.Users.FindAsync(idUser);
    }
    #endregion

    #region GetByName
    public async Task<List<UserEntity>> GetByNameAsync(string name)
    {
        return await context.Users
            .Where(u => u.FirstName.ToLower().Contains(name.ToLower()))
            .ToListAsync();
    }
    #endregion
}

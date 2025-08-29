namespace FrapiRest.Source.Core.Interface;
public interface IUserRepository
{
    Task<List<UserModel>> GetAllAsync();
    Task<UserModel?> GetByIdAsync(Guid id);
    Task<List<UserModel>> GetByNameAsync(string name);
    Task<UserModel> CreateAsync(UserModel user);
    Task<bool> UpdateAsync(UserModel user);
    Task<bool> DeleteAsync(Guid id);
}

namespace LearnAPI.Source.Core.Domain.Interfaces;
public interface IUserRepository: IUserReadRepository, IUserWriteRepository{}

public interface IUserReadRepository
{
    Task<List<UserEntity>> GetAllAsync();
    Task<UserEntity?> GetByIdAsync(Guid id);
    Task<List<UserEntity>> GetByNameAsync(string name);
}

public interface IUserWriteRepository
{
    Task<UserEntity> CreateAsync(UserEntity user);
    Task<bool> UpdateAsync(UserEntity idUser);
    Task<bool> DeleteAsync(Guid idUser);
}
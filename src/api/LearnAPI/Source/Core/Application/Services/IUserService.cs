namespace LearnAPI.Source.Core.Application.Services;
public interface IUserService: IUserReadService, IUserWriteService{}
public interface IUserReadService
{
    Task<List<UserEntity>> GetAll();
    Task<UserEntity?> GetById(Guid id);
    Task<List<UserEntity>> GetByName(string name);
}

public interface IUserWriteService
{
    Task<UserEntity> Create(CreateUserDto dto);
    Task<bool> Update(UpdateUserDto dto);
    Task<bool> Delete(Guid id);
}
    
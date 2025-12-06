namespace LearnAPI.Source.Core.Application.Services;
public class UserService : IUserService
{
    #region Construtor & Dependencie
    private readonly IUserRepository _repository;

    public UserService(IUserRepository repository)
    {
        _repository = repository;
    }
    #endregion

    #region Create
    public async Task<UserEntity> Create(CreateUserDto dto)
    {
        var user = new UserEntity(dto.FirstName, dto.LastName, dto.Email);
        return await _repository.CreateAsync(user);
    }
    #endregion

    #region Delete
    public async Task<bool> Delete(Guid id) => await _repository.DeleteAsync(id);

    #endregion

    #region Update
    public async Task<bool> Update(UpdateUserDto dto)
    {
        var existing = await _repository.GetByIdAsync(dto.Id);
        if (existing is null) return false;

        existing.Update(dto.FirstName, dto.LastName, dto.Email);
        return await _repository.UpdateAsync(existing);
    }
    #endregion

    #region GetAll
    public async Task<List<UserEntity>> GetAll() => await _repository.GetAllAsync();
    #endregion

    #region GetById
    public async Task<UserEntity?> GetById(Guid id) => await _repository.GetByIdAsync(id);
    #endregion

    #region GetByName
    public async Task<List<UserEntity>> GetByName(string name) => await _repository.GetByNameAsync(name);
    #endregion

}

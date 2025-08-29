namespace FrapiRest.Source.Controller;
[ApiController]
[Route("api/[controller]")]
public class UsersController(IUserRepository repository) : ControllerBase
{
        #region List
        [HttpGet("ListUser")]
        [EndpointSummary("List all users")]
        public async Task<ActionResult> ListUser()
        {
            var users = await repository.GetAllAsync();
            return Ok(users);
        }
        #endregion

        #region GetById
        [HttpGet("GetByIdUser")]
        [EndpointSummary("Get user by ID")]
        public async Task<ActionResult> GetByIdUser([FromQuery] Guid id)
        {
            var user = await repository.GetByIdAsync(id);
            if (user is null)
                return NotFound("User not found");

            return Ok(user);
        }
        #endregion

        #region Search
        [HttpGet("SearchUser")]
        [EndpointSummary("Search users by first name")]
        public async Task<ActionResult> SearchUser([FromQuery] string name)
        {
            var result = await repository.GetByNameAsync(name);
            return Ok(result);
        }
        #endregion

        #region Create
        [HttpPost("CreateUser")]
        [EndpointSummary("Create a new user")]
        public async Task<ActionResult> CreateUser([FromBody] UserModel model)
        {
            var created = await repository.CreateAsync(model);
            return CreatedAtAction(nameof(GetByIdUser), new { id = created.Id }, created);
        }
        #endregion

        #region Edit
        [HttpPut("EditUser")]
        [EndpointSummary("Edit user data")]
        public async Task<ActionResult> EditUser([FromBody] UserModel model)
        {
            var updated = await repository.UpdateAsync(model);
            if (!updated)
                return NotFound("User not found");

            return Ok();
        }
        #endregion

        #region Delete
        [HttpDelete("DeleteUser")]
        [EndpointSummary("Delete user by ID")]
        public async Task<ActionResult> DeleteUser([FromQuery] Guid id)
        {
            var deleted = await repository.DeleteAsync(id);
            if (!deleted)
                return NotFound("User not found");

            return NoContent();
        }
        #endregion
        
}
namespace LearnAPI.Source.Core.Application.DTOs;
public class UpdateUserDto
{
    public Guid Id { get; set; } = Guid.NewGuid();

    [Required(ErrorMessage = "First name is required")]
    [StringLength(50, ErrorMessage = "First name can't be longer than 50 characters")]
    public string FirstName { get; set; } = string.Empty;

    [Required(ErrorMessage = "Last name is required")]
    [StringLength(50, ErrorMessage = "Last name can't be longer than 50 characters")]
    public string LastName { get; set; } = string.Empty;

    [Required(ErrorMessage = "Email is required")]
    [EmailAddress(ErrorMessage = "Invalid email format")]
    [StringLength(150, ErrorMessage = "Email can't be longer than 150 characters")]
    public string Email { get; set; } = string.Empty;
}

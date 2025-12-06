namespace LearnAPI.Unity.Tests.Domain;
public class UserEntityTests
{
    #region ShouldCreateUser
    [Fact]
    public void Constructor_ShouldCreateUser_WhenValidData()
    {
        var user = new UserEntity("Domingos", "Silva", "domingos@email.com");

        Assert.NotEqual(Guid.Empty, user.Id);
        Assert.Equal("Domingos", user.FirstName);
        Assert.Equal("Silva", user.LastName);
        Assert.Equal("domingos@email.com", user.Email);
    }
    #endregion

    #region ShouldThrowArgumentException
    [Theory]
    [InlineData("", "Silva", "domingos@email.com")]
    [InlineData("Domingos", "", "domingos@email.com")]
    [InlineData("Domingos", "Silva", "")]
    [InlineData("Domingos", "Silva", "invalidEmail")]
    public void Constructor_ShouldThrowArgumentException_WhenInvalidData(string firstName, string lastName, string email)
    {
        Assert.Throws<ArgumentException>(() => new UserEntity(firstName, lastName, email));
    }
    #endregion

    #region ShouldChangeValues
    [Fact]
    public void Update_ShouldChangeValues_WhenValidData()
    {
        var user = new UserEntity("Domingos", "Silva", "domingos@email.com");

        user.Update("Carlos", "Pereira", "carlos@email.com");

        Assert.Equal("Carlos", user.FirstName);
        Assert.Equal("Pereira", user.LastName);
        Assert.Equal("carlos@email.com", user.Email);
    }
    #endregion
}

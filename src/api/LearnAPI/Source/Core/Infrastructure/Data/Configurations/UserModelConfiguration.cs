namespace LearnAPI.Source.Core.Infrastructure.Data.Configurations;

public class UserModelConfiguration : IEntityTypeConfiguration<UserEntity>
{
    public void Configure(EntityTypeBuilder<UserEntity> builder)
    {
        builder.HasData(
            new UserEntity("John", "Doe", "john.doe@example.com")
            { Id = Guid.Parse("aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa") },

            new UserEntity("Jane", "Smith", "jane.smith@example.com")
            { Id = Guid.Parse("bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb") },

            new UserEntity("Helena", "Rocha", "helena.rocha@example.com")
            { Id = Guid.Parse("44444444-4444-4444-4444-444444444444") }
        );
    }
}

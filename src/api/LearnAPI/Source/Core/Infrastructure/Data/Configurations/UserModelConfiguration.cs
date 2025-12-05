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

            new UserEntity("Carlos", "Silva", "carlos.silva@example.com")
            { Id = Guid.Parse("cccccccc-cccc-cccc-cccc-cccccccccccc") },

            new UserEntity("Maria", "Fernandes", "maria.fernandes@example.com")
            { Id = Guid.Parse("dddddddd-dddd-dddd-dddd-dddddddddddd") },

            new UserEntity("Pedro", "Almeida", "pedro.almeida@example.com")
            { Id = Guid.Parse("eeeeeeee-eeee-eeee-eeee-eeeeeeeeeeee") },

            new UserEntity("Ana", "Costa", "ana.costa@example.com")
            { Id = Guid.Parse("ffffffff-ffff-ffff-ffff-ffffffffffff") },

            new UserEntity("Luís", "Gomes", "luis.gomes@example.com")
            { Id = Guid.Parse("11111111-1111-1111-1111-111111111111") },

            new UserEntity("Sofia", "Martins", "sofia.martins@example.com")
            { Id = Guid.Parse("22222222-2222-2222-2222-222222222222") },

            new UserEntity("Ricardo", "Pereira", "ricardo.pereira@example.com")
            { Id = Guid.Parse("33333333-3333-3333-3333-333333333333") },

            new UserEntity("Helena", "Rocha", "helena.rocha@example.com")
            { Id = Guid.Parse("44444444-4444-4444-4444-444444444444") }
        );
    }
}

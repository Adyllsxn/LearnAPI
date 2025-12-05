# Base image (runtime)
FROM mcr.microsoft.com/dotnet/aspnet:10.0 AS base
WORKDIR /app
EXPOSE 8080

# Build image (SDK)
FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src

# Copy only the csproj first (for restore caching)
COPY ["src/api/LearnAPI/LearnAPI.csproj", "src/api/LearnAPI/"]
RUN dotnet restore "src/api/LearnAPI/LearnAPI.csproj"

# Copy the rest of the source
COPY . .

# Build
RUN dotnet build "src/api/LearnAPI/LearnAPI.csproj" -c $BUILD_CONFIGURATION -o /app/build

# Publish
FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "src/api/LearnAPI/LearnAPI.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

# Final runtime image
FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "LearnAPI.dll"]

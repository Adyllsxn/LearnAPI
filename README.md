# FrapiRest

A ready-to-use mock API built with **ASP.NET Core**, designed for frontend developers to practice integrations without setting up a backend.
**Offline. Lightweight. Fast.**

Ideal for those working with React, Angular, Vue, Flutter, Blazor, and other frontend technologies.


---

## 🎯 Objective

**Frapi** was created for frontend developers who:

- Don’t want to waste time creating a backend
- Want to practice CRUD and data consumption
- Need something 100% offline
- Want consistent data available on every run

---

## 📸 Demo Screenshot

![Frapi Demo](./Assets/frapirest.png "Frapi API Visual Studio Code Structure")

---

## 🔗 API Endpoints

| Method | Endpoint                  | Description                         |
|--------|---------------------------|-------------------------------------|
| GET    | `/api/ListUser`          | List all users                      |
| GET    | `/api/GetByIdUser?id=`   | Get user by unique ID (GUID)       |
| GET    | `/api/SearchUser?name=`  | Search users by first name         |
| POST   | `/api/CreateUser`        | Create a new user                   |
| PUT    | `/api/EditUser`          | Edit/update an existing user       |
| DELETE | `/api/DeleteUser?id=`    | Delete user by ID                  |

### 📌 Example: JSON body for creating/updating user

```json
{
  "firstName": "Alice",
  "lastName": "Johnson",
  "email": "alice.johnson@example.com"
}
```

---

## Project Structure

```bash
FRAPI/
│
├── Assets/                         # Images, screenshots, assets
├── Source/
│   ├── Controller/                 # API Controllers          
│   │
│   ├── Core/
│   │   ├── Context/               # EF Core DbContext
│   │   ├── Model/                 # Data Models (User)
│   │   └── Repository/            # UserRepository + Interface
│   │
│   └── Setup/
│       ├── Extensions/            # (optional future middlewares)
│       └── Pipeline/              # (optional DI & app config)
│
├── GlobalUsings.cs                # Global usings for cleaner code
├── Program.cs                     # Entry point with config
├── Frapi.csproj                   # Project file
├── appsettings.json               # App config
└── README.md                      # You are here
```

---

## Installing Frapi

To install Frapi, just clone it:

### On Linux / macOS

```bash
sudo git clone https://github.com/Adyllsxn/frapi-rest.git

cd frapi
dotnet run
```

### On Windows

```bash
git clone https://github.com/Adyllsxn/frapi-rest.git

cd frapi
dotnet run
```

---

## ✅ Requirements

- [.NET 8 SDK](https://dotnet.microsoft.com/en-us/download)
- Visual Studio Code, Rider ou Visual Studio
- Postman ou Swagger UI (já integrado)

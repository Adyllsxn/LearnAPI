# 📖 LearnAPI - API Reference

This document provides details about the available endpoints in LearnAPI.

---

## 👤 User Management

### 🔎 Read
- **GET** `/api/users` → List all users  
- **GET** `/api/users/{id}` → Get user by ID  
- **GET** `/api/users/search?name={name}` → Search users by first name  

### ✍️ Write
- **POST** `/api/users` → Create a new user  
- **PUT** `/api/users` → Update an existing user  
- **DELETE** `/api/users/{id}` → Delete user by ID  

---

## 📦 Data Model

### UserEntity
```json
{
  "id": "guid",
  "firstName": "string",
  "lastName": "string",
  "email": "string"
}

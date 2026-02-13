# 🎵 Spotify Backend API

A RESTful backend API built using **Node.js** and **Express.js** that handles authentication, music management, album handling, and role-based access control.

This project demonstrates backend architecture, middleware validation, JWT authentication, and MongoDB integration.

---

## 🚀 Features

- 🔐 User Registration & Login (JWT Authentication)
- 🧑‍💼 Role-Based Access (User / Admin)
- 🎶 Create, Fetch, Update & Delete Music
- 💿 Album Management
- 📦 File Upload / Storage Handling
- 🛡 Request Validation Middleware
- 🔑 Password Hashing (bcrypt)
- 🍪 Token stored securely in cookies
- 🌱 Environment variable support (dotenv)

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- bcryptjs
- dotenv
- cookie-parser

---

## 📂 Project Structure

spotify-backend/
│
├── src/
│ ├── controllers/ # Business logic
│ ├── models/ # Database schemas
│ ├── routes/ # API routes
│ ├── middleware/ # Authentication & validation
│ ├── storage/ # File handling logic
│ ├── db/ # Database connection
│ └── app.js # Express app configuration
│
├── server.js # Entry point
├── package.json
├── .env.example
└── README.md



---

## ⚙️ Installation Guide

### 1️⃣ Clone the Repository

```
git clone https://github.com/anishaxtha/spotify.git
cd spotify
```


## Install Dependencies

`npm install`

## Development Mode
`npm run dev`

`npm start`

#### Server runs at:
`http://localhost:3000`

## 📌 API Endpoints

---

### 🔐 Authentication Routes

| Method | Endpoint      | Access  | Description |
|--------|--------------|---------|------------|
| POST   | /register    | Public  | Register a new user |
| POST   | /login       | Public  | Login user |
| POST   | /logout      | Private | Logout user |

---

### 🎵 Music Routes

| Method | Endpoint      | Access | Description |
|--------|--------------|--------|------------|
| POST   | /upload      | Artist | Upload new music (multipart/form-data, field: "music") |
| GET    | /            | User   | Get all musics |

---

### 💿 Album Routes

| Method | Endpoint                | Access | Description |
|--------|------------------------|--------|------------|
| POST   | /album                 | Artist | Create new album |
| GET    | /albums                | User   | Get all albums |
| GET    | /albums/:albumId       | User   | Get album by ID |

---


## 🔒 Authentication Flow

- User registers or logs in
- Server generates JWT token
- Token stored in cookies
- Protected routes require valid token
- Middleware verifies authentication before access
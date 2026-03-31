# 📺 YouTube Backend API

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-ISC-green.svg)
![Node.js](https://img.shields.io/badge/node.js-v16+-green.svg)
![Status](https://img.shields.io/badge/status-Active-success.svg)

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Environment Variables](#-environment-variables)
- [API Endpoints](#-api-endpoints)
- [Usage](#-usage)
- [Security](#-security)
- [Contributing](#-contributing)
- [Author](#-author)
- [Acknowledgments](#-acknowledgments)

---

## 🎯 Overview

**YouTube Backend API** is a robust server-side application built to power a YouTube-like video streaming and engagement platform. Built using modern JavaScript, Express.js, and MongoDB, this API enables authentication, media uploads, video management, and comments — all with best practices in security and modular code design.

> 🟡 This project is the foundation for your own video platform or for learning how large media backends operate.

---

## ✨ Features

- ✅ **User Authentication** (JWT, password hashing)
- ✅ **Video Uploads** (via file upload and Cloudinary)
- ✅ **Video Management** (CRUD endpoints for videos)
- ✅ **User Management** (profiles, authentication)
- ✅ **Commenting System** (CRUD for video comments)
- ✅ **Scalable & Modular Codebase**
- ✅ **MongoDB Integration with Mongoose**
- ✅ **Environment-based configuration**
- ✅ **File Uploads with express-fileupload**
- ✅ **REST API Design & JSON responses**
- ✅ **Ready for Docker/Cloud deployment**

---

## 🛠️ Tech Stack

| Category             | Technology                                    |
|----------------------|-----------------------------------------------|
| **Runtime**          | Node.js (v16+)                                |
| **Framework**        | Express.js v5.2.1                             |
| **Database**         | MongoDB + Mongoose v9.3.3                     |
| **Authentication**   | JWT (`jsonwebtoken` v9.0.3)                   |
| **Password Hashing** | bcrypt v6.0.0                                 |
| **Env Mgmt**         | dotenv v17.3.1                                |
| **Uploads**          | express-fileupload v1.5.2, Cloudinary v2.9.0  |
| **Parsing**          | body-parser v2.2.2                            |
| **Dev Tools**        | nodemon v3.1.14                               |

---

## 📁 Project Structure

```
Youtube-Backend-api/
├── config/           # App and database config
├── controllers/      # Core logic for each route
├── middlewares/      # Auth & error-handling logic
├── models/           # Database schemas (Mongoose)
├── routes/           # API endpoints
├── index.js          # App entry point
├── package.json      # Project metadata & dependencies
└── .env              # (local) environment variables
```

---

## ⚙️ Installation

### Prerequisites
- **Node.js** (v16 or higher)
- **MongoDB** (local or Atlas cloud)
- **npm** package manager

### Setup Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Birabhadra/Mini-Projects.git
   cd Mini-Projects/Youtube-Backend-api
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file (see below for what to include).

4. **Start the Server**
   ```bash
   # Development mode (with auto-reload)
   npm run dev

   # Production mode
   node index.js
   ```

   > The app will run at: `http://localhost:<PORT>` (default: 3000)

---

## 🔐 Environment Variables

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```
> **Never commit your `.env` file to version control!**

---

## 🔌 API Endpoints

### 👤 User Auth (`/auth`)
- `POST /auth/register` — Register user
- `POST /auth/login` — Login/get JWT
- `GET /auth/profile` — Get user profile *(JWT required)*

### 📼 Videos (`/video`)
- `POST /video/upload` — Upload a video *(file upload — JWT required)*
- `GET /video/all` — Get all videos
- `GET /video/:id` — Get single video details
- `PUT /video/:id` — Update video *(JWT required)*
- `DELETE /video/:id` — Delete video *(JWT required)*

### 💬 Comments (`/comment`)
- `POST /comment/add` — Add comment to a video *(JWT required)*
- `GET /comment/video/:videoId` — List comments for a video
- `PUT /comment/:id` — Edit comment *(JWT required)*
- `DELETE /comment/:id` — Delete comment *(JWT required)*

---

## 🚀 Usage & Curl Examples

### User Registration
```bash
curl -X POST http://localhost:3000/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username":"demo","email":"demo@example.com","password":"password"}'
```

### Upload Video (authenticated)
```bash
curl -X POST http://localhost:3000/video/upload \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -F "file=@/path/to/video.mp4"
```

### Post Comment (authenticated)
```bash
curl -X POST http://localhost:3000/comment/add \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"videoId":"12345","comment":"Great video!"}'
```

---

## 🛡️ Security

- **JWT** for secure API authentication
- **bcrypt** for password hashing
- **Mongoose** for database queries — protects against injection
- **Active .env** for secret/config separation
- **Input Validation**: Always validate user input (recommended to expand further)

---

## 🤝 Contributing

All contributions are welcome! Please:
- Fork this repository, make changes in a new branch
- Write clear commits, keep code modular and use modern ES6+ JS
- Open a Pull Request with a description of your changes

Sample commit message:
```
feat: add video search endpoint
fix: sanitize user inputs in comments
docs: update API usage section
```

---

## 👨‍💻 Author

**Birabhadra**  
[GitHub](https://github.com/Birabhadra)

---

## 🙏 Acknowledgments

- Express.js, Mongoose, JWT, Cloudinary
- Anyone who has contributed to open backend media systems  
- Inspired by modern video sharing platforms

---

<div align="center">

⭐️ *If you find this project useful, give it a star!* ⭐️

**Last Updated:** March 2026 | **Version:** 1.0.0

</div>

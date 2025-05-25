# Chatty - Backend Server

This is the **backend server** for **Chatty**, a real-time chat application built with the MERN stack (MongoDB, Express.js, React.js, Node.js). This backend handles user authentication, message storage, and real-time communication using **Socket.IO**.

> 🚀 The frontend repository can be found here:  
> 👉 [Chatty Frontend Repository](https://github.com/shivamprakash2909/Chatty.git)

---

## Features

- User authentication (signup/login)
- Store and retrieve messages from MongoDB
- Real-time messaging with WebSockets (Socket.IO)
- REST API for frontend integration
- JWT-based authorization

---

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (Mongoose ODM)
- **Real-Time**: Socket.IO
- **Authentication**: JSON Web Token (JWT), bcrypt

---

---

## Getting Started

### Prerequisites

- Node.js
- MongoDB (local or cloud instance)

### Environment Variables

Create a `.env` file in the root of the project:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/chatty
JWT_SECRET=your_jwt_secret_key
CLIENT_URL=http://localhost:3000
```

## 🚀 Installation and Cloning Guide

Follow these steps to set up and run the backend server locally:

### 1. Clone the Repository

```bash
git clone https://github.com/shivamprakash2909/chatty-server.git
cd chatty-server
npm install
npm start
```

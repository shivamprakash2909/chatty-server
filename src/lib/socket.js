import { Server } from "socket.io";
import http from "http";
import express from "express";
import { log } from "console";

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: [
      process.env.NODE_ENV === "production"
        ? process.env.ORIGIN_PROD
        : process.env.ORIGIN,
    ],
  },
});

//used to store the online users
const userSocketMap = {}; //{userId:socketId}

io.on("connection", (socket) => {
  console.log("A new user is connected", socket.id);
  const userId = socket.handshake.query.userId;
  if (userId) userSocketMap[userId] = socket.id;
  socket.on("disconnect", () => {
    console.log("A user is disconnected", socket.id);
  });
});
export { io, app, server };

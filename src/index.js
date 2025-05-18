import express from "express";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import healthCheckRouter from "./routes/healthcheck.route.js";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectDB } from "./lib/db.js";
import { app, server } from "./lib/socket.js";

dotenv.config();

const PORT = process.env.PORT;
app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use("/api", healthCheckRouter);
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
server.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
  connectDB();
});

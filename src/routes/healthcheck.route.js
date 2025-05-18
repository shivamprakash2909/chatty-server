import express from "express";

const healthCheckRouter = express.Router();

healthCheckRouter.route("/").get((req, res) => {
  res.status(200).json({
    succes: true,
    message: "Server is up and running",
    nodeEnv: process.env.NODE_ENV,
  });
});

export default healthCheckRouter;

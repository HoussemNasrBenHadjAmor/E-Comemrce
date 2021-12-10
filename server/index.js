import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import db from "./config/db.js";

import { authRouter, userRouter } from "./routes/index.js";

dotenv.config();

db();

const app = express();

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

app.use(bodyParser.json());

app.use(cookieParser());

app.listen(process.env.PORT, () => {
  console.log(`connecting on Port ${process.env.PORT}`);
});

app.get("/", (req, res) => {
  res.send(`app is running on ${process.env.PORT}`);
});

app.use("/auth", authRouter);

app.use("/user", userRouter);

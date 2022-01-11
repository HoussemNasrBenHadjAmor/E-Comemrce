import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import db from "./config/db.js";

import { authRouter, userRouter } from "./routes/index.js";

dotenv.config();

const origin_front = process.env.ORIGIN_FRONT;

const origin_front_local = process.env.ORIGIN_FRONT_LOCAL;

const app = express();

db();

app.set("trust proxy", 1);

app.use(
  cors({
    credentials: true,
    // origin: [origin_front_local, origin_front],
    origin: "http://localhost:3000",
    // origin: "https://hnbhastore.netlify.app",
    // default: origin_front,
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

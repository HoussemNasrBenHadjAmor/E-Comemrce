import express from "express";

import {
  login,
  signup,
  logout,
  refresh,
  protectedRoute,
} from "../controllers/auth.js";

import { sign } from "../controllers/google.js";

import { verify } from "../middleware/authentication.js";

const router = express.Router();

router.post("/login", login);

router.post("/sign", signup);

router.post("/logout", verify, logout);

router.post("/refresh", refresh);

router.post("/protected", verify, protectedRoute);

router.post("/google", sign);

export default router;

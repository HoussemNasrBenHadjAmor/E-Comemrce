import express from "express";

import { verify } from "../middleware/authentication.js";

import { updateUser, getUser, changePass } from "../controllers/user.js";

const router = express.Router();

router.get("/:id", verify, getUser);

router.put("/:id", verify, updateUser);

router.put("/change-pass/:id", verify, changePass);

export default router;

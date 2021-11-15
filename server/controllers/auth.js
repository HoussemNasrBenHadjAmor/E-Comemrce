import userModel from "../models/user.js";

import bcrypt from "bcrypt";

import jwt from "jsonwebtoken";

import dotenv from "dotenv";

dotenv.config();

var refreshTokens = [];

const saltRounds = 15;

const secretKey = process.env.SECRET_KEY;

const generateAccessToken = (user) => {
  return jwt.sign({ id: user._id }, secretKey, {
    expiresIn: "15m",
  });
};

const generateRefreshToken = (user) => {
  return jwt.sign({ id: user._id }, secretKey);
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const oldUser = await userModel.findOne({ email });

    if (!oldUser) {
      return res.status(404).json("Email Is incorrect");
    }

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

    if (!isPasswordCorrect) {
      return res.status(401).json("Password Is Incorrect");
    }

    const token = generateAccessToken(oldUser);

    const refreshToken = generateRefreshToken(oldUser);

    refreshTokens.push(refreshToken);

    res
      .cookie("id", oldUser._id, { path: "/", secure: true })
      .cookie("token", token, { path: "/", secure: true })
      .cookie("refreshToken", refreshToken, { path: "/", secure: true })
      .sendStatus(200);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const signup = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existedUser = await userModel.findOne({ email });
    if (existedUser) {
      return res.status(400).json("User Already Exist");
    }

    const hashedPassword = bcrypt.hashSync(password, saltRounds);

    await userModel.create({ email, password: hashedPassword });

    res.sendStatus(200);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const logout = async (req, res) => {
  const { refreshToken } = req.body;
  try {
    if (!refreshToken) {
      return res.status(404).json("RefreshToken Required");
    }

    if (!refreshTokens.includes(refreshToken)) {
      return res.status(401).json("Invalid RefreshToken");
    }

    refreshTokens = refreshTokens.filter((token) => token !== refreshToken);

    res
      .clearCookie("id", { path: "/" })
      .clearCookie("token", { path: "/" })
      .clearCookie("refreshToken", { path: "/" })
      .sendStatus(200);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const refresh = async (req, res) => {
  const { refreshToken } = req.body;
  try {
    if (!refreshToken) {
      return res.status(404).json("Credentials Requied");
    }

    if (!refreshTokens.includes(refreshToken)) {
      return res.status(401).json("Invalid Credentials");
    }

    jwt.verify(refreshToken, secretKey, (err, user) => {
      if (err) {
        return res.status(403).json("Credentials Not Valid After Verifing");
      }

      const newAccessToken = generateAccessToken(user);

      const newRefreshToken = generateRefreshToken(user);

      refreshTokens = refreshTokens.filter((token) => token !== refreshToken);

      refreshTokens.push(newRefreshToken);

      res
        .cookie("token", newAccessToken, { path: "/", secure: true })
        .cookie("refreshToken", newRefreshToken, { path: "/", secure: true })
        .status(200)
        .json({
          newAccessToken,
          newRefreshToken,
        });
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const protectedRoute = async (req, res) => {
  const { refreshToken, id } = req.body;
  try {
    if (!refreshToken || !id) {
      return res.status(404).json("Credentials Required");
    }

    const correctID = await userModel.findById(id);

    const correctRefreshToken = refreshTokens.includes(refreshToken);

    if (!correctID || !correctRefreshToken) {
      return res.status(403).json("Invalid ID or Refresh");
    }

    res.sendStatus(200);
  } catch (error) {
    res.status(500).json(error);
  }
};

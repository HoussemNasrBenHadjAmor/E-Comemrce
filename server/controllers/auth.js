import userModel from "../models/user.js";

import bcrypt from "bcrypt";

import jwt from "jsonwebtoken";

import dotenv from "dotenv";

dotenv.config();

// var refreshTokens = [];

const saltRounds = 15;

const secretKey = process.env.SECRET_KEY;

export const generateAccessToken = (user) => {
  return jwt.sign({ id: user._id }, secretKey, {
    expiresIn: "15m",
  });
};

export const generateRefreshToken = (user) => {
  return jwt.sign({ id: user._id }, secretKey);
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const oldUser = await userModel.findOne({ email });

    if (!oldUser) {
      return res.status(401).json("Email Or Password Is Incorrect");
    }

    if (oldUser.password === null && oldUser.googleId) {
      return res.status(401).json("You Need To Login With Google Account");
    }

    if (oldUser.password === null && oldUser.facebookId) {
      return res.status(401).json("You Need To Login With Facebook Account");
    }

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

    if (!isPasswordCorrect) {
      return res.status(404).json("Email Or Password Is Incorrect");
    }

    const token = generateAccessToken(oldUser);

    const refreshToken = generateRefreshToken(oldUser);

    await userModel.findByIdAndUpdate(oldUser._id, {
      token,
      refreshToken,
    });

    res
      .cookie("id", oldUser._id, {
        path: "/",
        secure: true,
        sameSite: "none",
        // domain: "hnbhastore.netlify.app",
      })
      .cookie("token", token, {
        path: "/",
        secure: true,
        sameSite: "none",
        // domain: "hnbhastore.netlify.app",
      })
      .cookie("refreshToken", refreshToken, {
        path: "/",
        secure: true,
        sameSite: "none",
        // domain: "hnbhastore.netlify.app",
      })
      .sendStatus(200);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const signup = async (req, res) => {
  const { email, password, firstName, lastName } = req.body;
  try {
    const existedUser = await userModel.findOne({ email });
    if (existedUser) {
      return res.status(400).json("You Already Have An Account !");
    }

    const hashedPassword = bcrypt.hashSync(password, saltRounds);

    await userModel.create({
      email,
      password: hashedPassword,
      firstName,
      lastName,
    });

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

    const isValidRefreshToken = await userModel.findOne({ refreshToken });

    if (!isValidRefreshToken) {
      return res.status(401).json("Invalid RefreshToken");
    }

    await userModel.findOneAndUpdate(
      { refreshToken },
      {
        token: null,
        refreshToken: null,
      }
    );

    window.location.href = "/auth/sign-in";

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

    const userWithRefreshToken = await userModel.findOne({ refreshToken });

    if (!userWithRefreshToken) {
      return res.status(401).json("Invalid Credentials");
    }

    jwt.verify(refreshToken, secretKey, async (err, user) => {
      if (err) {
        return res.status(403).json("Credentials Not Valid After Verifing");
      }

      const newAccessToken = generateAccessToken(user);

      const newRefreshToken = generateRefreshToken(user);

      await userModel.findOneAndUpdate(
        { refreshToken },
        {
          token: newAccessToken,
          refreshToken: newRefreshToken,
        }
      );

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

    const correctUser = await userModel.findOne({
      _id: id,
      refreshToken,
    });

    if (!correctUser) {
      return res.status(403).json("Invalid ID or Refresh");
    }

    res.sendStatus(200);
  } catch (error) {
    res.status(500).json(error);
  }
};

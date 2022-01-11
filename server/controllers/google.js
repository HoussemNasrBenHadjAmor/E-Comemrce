import { OAuth2Client } from "google-auth-library";

import jwt from "jsonwebtoken";

import dotenv from "dotenv";

import userModel from "../models/user.js";

dotenv.config();

const client = new OAuth2Client({
  clientId: process.env.GOOGLE_AUTH_KEY,
  clientSecret: process.env.GOOGLE_AUTH_SECRET_CLIENT,
});

const secretKey = process.env.SECRET_KEY;

export const generateAccessToken = (id) => {
  return jwt.sign({ id }, secretKey, {
    expiresIn: "15m",
  });
};

export const generateRefreshToken = (id) => {
  return jwt.sign({ id }, secretKey);
};

export const sign = async (req, res) => {
  const { idToken } = req.body;
  try {
    const ticket = await client.verifyIdToken({
      idToken,
      audience: process.env.GOOGLE_AUTH_KEY,
    });

    const { given_name, family_name, email, picture } = ticket.getPayload();

    const googleId = ticket.getUserId();

    const userGoogleId = await userModel.findOne({ googleId });

    const userGoogleEmail = await userModel.findOne({ email });

    const token = generateAccessToken(googleId);

    const refreshToken = generateRefreshToken(googleId);

    if (userGoogleId) {
      const updatedUser = await userModel.findOneAndUpdate(
        { googleId },
        {
          firstName: given_name,
          lastName: family_name,
          email,
          profilePhoto: picture,
          token,
          refreshToken,
        }
      );
      return res
        .cookie("id", updatedUser._id, {
          path: "/",
          secure: true,
        })
        .cookie("token", token, {
          path: "/",
          secure: true,
        })
        .cookie("refreshToken", refreshToken, {
          path: "/",
          secure: true,
        })
        .status(200)
        .json(updatedUser);
    }

    if (userGoogleEmail && !userGoogleId) {
      const updatedUser = await userModel.findOneAndUpdate(
        { email },
        {
          firstName: given_name,
          lastName: family_name,
          email,
          profilePhoto: picture,
          googleId,
          token,
          refreshToken,
        }
      );
      return res
        .cookie("id", updatedUser._id, { path: "/", secure: true })
        .cookie("token", token, { path: "/", secure: true })
        .cookie("refreshToken", refreshToken, { path: "/", secure: true })
        .status(200)
        .json(updatedUser);
    }

    if (!userGoogleId && !userGoogleEmail) {
      const newUser = await userModel.create({
        firstName: given_name,
        lastName: family_name,
        email,
        profilePhoto: picture,
        googleId,
        token,
        refreshToken,
      });
      return res
        .cookie("id", newUser._id, { path: "/", secure: true })
        .cookie("token", token, { path: "/", secure: true })
        .cookie("refreshToken", refreshToken, { path: "/", secure: true })
        .status(200)
        .json(newUser);
    }
  } catch (error) {
    res.status(500).json({ msg: "error", data: error });
  }
};

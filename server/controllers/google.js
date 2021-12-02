import { OAuth2Client, GoogleAuth } from "google-auth-library";

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
    // const idToken =
    //   "eyJhbGciOiJSUzI1NiIsImtpZCI6IjkzNDFhYmM0MDkyYjZmYzAzOGU0MDNjOTEwMjJkZDNlNDQ1MzliNTYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiMjk3MzYxMjU0ODQ2LWJtbWN2bWdrNXA2MnEyYThrbjA5Y28yOHIwbjk3aHVkLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiMjk3MzYxMjU0ODQ2LWJtbWN2bWdrNXA2MnEyYThrbjA5Y28yOHIwbjk3aHVkLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTA3MDg5NzUxNjY5NDU0ODI5ODg1IiwiZW1haWwiOiJob3Vzc2VtYmVubmFzcjEwQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoiT0piYmNUcFlKVXJLYjdTVTBqUURoQSIsIm5hbWUiOiJIb3Vzc2VtIEJlbiBOYXNyIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hLS9BT2gxNEdqdUtTQUt5TXJVQUY4VDIydW1QQm9BSXVTempsSzY5UFQtOGRvdl93PXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6IkhvdXNzZW0iLCJmYW1pbHlfbmFtZSI6IkJlbiBOYXNyIiwibG9jYWxlIjoiZnIiLCJpYXQiOjE2MzgzNzY3NjUsImV4cCI6MTYzODM4MDM2NSwianRpIjoiOGFkZmU2MDdhOTRlMWU0OTAyZWRjODgzN2Q2YzI0MjVkNmEwOTNhNiJ9.Jxl9NZwjKv2xnQ9W5OuJIMAj3Cc8asS_0ING_FGjsGtCQ0r8HdRG9SVtbU2iUXCKplCltld5N4zMHu7-DcSjQkrDGNxI0AZItpn0xB0lVU0hBBa6ewLXSms9EwiLtcd-ZBPSgIrN09RH_i45qhZFnoU54m_t10UR0Ak6hkCDfqqINuN-coybVtn-gn54O93P-JE0FNhrGrPPl9t-MU3ea0GVWKT04u7Mudn2i8gSuveLLVkywoEe_hSVFEvwdam-sSgsvc60bpazmkf0pw8_ZJTL5Xd-4YuEWwkgyM4p3vyfB8kU9R5JhYcrHeHu6qXL3B4N_vixuedxIQ-S5XEwvA";

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
          priority: "High",
          domain: "localhost",
        })
        .cookie("token", token, {
          path: "/",
          secure: true,
          priority: "High",
          domain: "localhost",
        })
        .cookie("refreshToken", refreshToken, {
          path: "/",
          secure: true,
          priority: "High",
          domain: "localhost",
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

export const logout = async (req, res) => {
  try {
    const auth = new GoogleAuth();
    // auth.
  } catch (error) {
    res.status(500).json(error);
  }
};

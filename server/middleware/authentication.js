import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const verify = (req, res, next) => {
  const token = req.headers["x-access-token"];
  try {
    if (token) {
      jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
        if (err) {
          return res.status(403).json("Token Credentials Not Valid");
        }
        req.user = user;
        next();
      });
    } else {
      res.status(401).json("You Need To Be Authenticated");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

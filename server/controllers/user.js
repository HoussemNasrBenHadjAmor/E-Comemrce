import userModel from "../models/user.js";
import bcrypt from "bcrypt";

const saltRounds = 15;

export const updateUser = async (req, res) => {
  const { id } = req.params;

  const phoneNumberBody = "phoneNumber";

  try {
    const isBodyPhone = Object.keys(req.body)[0];

    if (isBodyPhone === phoneNumberBody) {
      const phoneValue = Object.values(req.body)[0];
      const phoneExistInDataBase = await userModel.findOne({
        phoneNumber: phoneValue,
      });

      if (phoneExistInDataBase) {
        return res.status(403).json("This Phone Number Is Already Token");
      }
    }

    await userModel.findByIdAndUpdate(id, req.body);

    const {
      firstName,
      lastName,
      email,
      profilePhoto,
      phoneNumber,
      googleId,
      facebookId,
    } = await userModel.findById(id);

    res.status(200).json({
      firstName,
      lastName,
      email,
      profilePhoto,
      phoneNumber,
      googleId,
      facebookId,
    });
  } catch (error) {
    const errorPosition = Object.keys(error.keyPattern)[0];
    const message = "This" + " " + errorPosition + " " + "Is Already Token";
    res.status(500).json(message);
  }
};

export const getUser = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      firstName,
      lastName,
      email,
      profilePhoto,
      phoneNumber,
      googleId,
      facebookId,
    } = await userModel.findById(id);

    res.status(200).json({
      firstName,
      lastName,
      email,
      profilePhoto,
      phoneNumber,
      googleId,
      facebookId,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const changePass = async (req, res) => {
  try {
    const { oldPass, newPass } = req.body;

    const { id } = req.params;

    const newHashPass = bcrypt.hashSync(newPass, saltRounds);

    const user = await userModel.findById(id);

    if (user) {
      const isOldPassCorrect = await bcrypt.compare(oldPass, user.password);

      if (isOldPassCorrect) {
        await userModel.findByIdAndUpdate(id, {
          password: newHashPass,
        });
        return res.sendStatus(200);
      } else {
        return res.status(404).json("Old Password Is Not Correct");
      }
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

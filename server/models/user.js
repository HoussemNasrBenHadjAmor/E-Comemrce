import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: false,
    default: null,
  },
  phoneNumber: {
    type: Number,
    default: null,
  },
  profilePhoto: {
    type: String,
    default: null,
  },
  googleId: {
    type: String,
    default: null,
  },
  facebookId: {
    type: String,
    default: null,
  },
});

userSchema.pre("save", (next) => {
  next();
});

const userModel = mongoose.model("userModel", userSchema);

export default userModel;

import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
  },
  profilePhoto: {
    type: String,
  },
});

userSchema.pre("save", (next) => {
  next();
});

const userModel = mongoose.model("userModel", userSchema);

export default userModel;

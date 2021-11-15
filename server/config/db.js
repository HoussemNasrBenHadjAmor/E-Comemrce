import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const db = process.env.DB;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDb connected ${conn.connection.host}`);
  } catch (error) {
    console.log("error", error);
    process.exit(1);
  }
};

export default connectDB;

import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_HOST);
    console.log("👍 [DataBase] -> Connected");
  } catch (error) {
    console.log("Error connecting to MongoDB", error);
  }
};



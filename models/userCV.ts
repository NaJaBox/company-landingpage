import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    firstName: String,
    mobileNumber: Number,
  
  },
  { timestamps: true }
);

const UserCV = mongoose.models.UserCV || mongoose.model("UserCV", userSchema);

export default UserCV;

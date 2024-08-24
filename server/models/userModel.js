import mongoose from "mongoose";
import { type } from "os";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // Ensure it's hashed before saving
    role: { type: String, enum: ["client", "Driver"], required: true }, // Role of the user
    model: { type: String},
    company: { type: String }, 
    Address:{type:String},
    Address_2:{type:String},
  },
  { timestamps: true }
); // Automatically adds createdAt and updatedAt fields

const User = mongoose.model("User", userSchema);

export default User;

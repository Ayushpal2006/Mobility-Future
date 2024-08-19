import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // Ensure it's hashed before saving
    role: { type: String, enum: ["client", "trucker"], required: true }, // Role of the user
    phoneNumber: { type: String, required: true },
    profilePicture: { type: String }, // URL to profile picture (optional)
  },
  { timestamps: true }
); // Automatically adds createdAt and updatedAt fields

const User = mongoose.model("User", userSchema);

export default User;

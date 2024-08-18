import bcrypt from 'bcrypt';
import userModel from '../models/userModel.js';
import { generateToken } from '../utils/generateToken.js';


export const register = async (req, res, next) => {
  try {
    const { name, email, password, role, phoneNumber, profilePicture, rating } = req.body;

    const alreadyUser = await userModel.findOne({ email });
    if (alreadyUser) {
      return res.status(400).json({
        success: false,
        message: "You have already registered with this email. Try another one.",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await userModel.create({
      name,
      email,
      password: hash,
      role,
      phoneNumber,
      profilePicture,
      rating,
    });

    const token = generateToken(user);
    res.cookie('token', token, { httpOnly: true });
    res.json({
      success: true,
      message: "User created successfully",
      user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email });

  if (!user) {
    return res.status(400).json({
      success: false,
      message: "Can't find user",
    });
  }

  bcrypt.compare(password, user.password, (err, result) => {
    if (err) {
      return res.status(500).json({ success: false, message: "Server Error" });
    }

    if (result) {
      const token = generateToken(user);
      res.cookie('token', token, { httpOnly: true });
      res.json({
        success: true,
        message: "Login successful",
        user,
      });
    } else {
      res.status(400).json({
        success: false,
        message: "Invalid password",
      });
    }
  });
};

export const logout = (req, res) => {
  const options = {
    httpOnly: true,
    secure: true,
  };
  res.clearCookie('token', options);
  res.json({ success: true, message: "Logged out successfully" });
};

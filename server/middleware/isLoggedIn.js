import userModel from '../models/userModel.js';
import jwt from 'jsonwebtoken';

export default async function isLoggedIn(req, res, next) {
  console.log('Cookies:', req.cookies);
  if (!req.cookies.token) {
    console.log('error', 'Please log in to view this page');
    return res.json({
      success: false,
      message: 'No token found',
    });
  }

  try {
    const decodedToken = jwt.verify(req.cookies.token, process.env.JWT_KEY);
    if (!decodedToken) {
      console.log('error', 'Token is invalid');
      return res.json({
        success: false,
        message: 'Token is invalid',
      });
    }

    const user = await userModel
      .findOne({ email: decodedToken.email })
      .select('-password'); // Ensure the field name matches your schema

    req.user = user;
    next();
  } catch (error) {
    console.log('error', 'Something went wrong');
    res.json({
      success: false,
      message: 'Something went wrong',
    });
  }
}

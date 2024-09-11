import express from "express";
import { register, login, logout } from "../controllers/authController.js";
import isLoggedIn from "../middleware/isLoggedIn.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
// router.get("/protected", isLoggedIn, (req, res) => {

//   res.json({ success: true, message: "You have access to this route!" });
// });

router.get('/set', (req, res) => {
  const token = 'yourGeneratedTokenHere';
  res.cookie('token', token, { httpOnly: true });
  res.send('Cookie has been set');
});


router.get('/get', (req, res) => {
  const token = req.cookies.token;
  if (token) {
    res.send('Cookie is set');
  } else {
    res.send('Cookie is not set');
  }
});


export default router;

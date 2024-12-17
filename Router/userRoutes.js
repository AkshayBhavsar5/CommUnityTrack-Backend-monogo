import express from "express";
import {
  register,
  login,
  logOut,
  getUser,
  updateuser,
  updatePassword,
  getAllUser,
} from "../Controller/userController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", isAuthenticated, logOut);
router.get("/me", isAuthenticated, getUser);
router.get("/alluser", isAuthenticated, getAllUser);
router.put("/update/me", isAuthenticated, updateuser);
router.put("/update/password", isAuthenticated, updatePassword);

export default router;

import express from "express";
// import { register, login, logout } from "../controllers/auth.js";
import { SignUp, SignIn, LogOut } from "../controllers/authUser.js";
const router = express.Router();

router.post("/signup", SignUp);
router.post("/signin", SignIn);
router.post("/signout", LogOut);

export default router;

import express from "express";
import {
	register,
	login,
	handleRefreshToken,
	logout,
} from "../controller/auth.controller.js";
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.get("/refresh", handleRefreshToken);

export default router;

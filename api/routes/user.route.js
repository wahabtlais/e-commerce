import express from "express";
import {
	allUsers,
	deleteUser,
	getUser,
	updateUser,
	blockUser,
	unblockUser,
	forgotPasswordToken,
	resetPassword,
	getWishlist,
	updatePassword,
	saveAddress,
} from "../controller/user.controller.js";
import { verifyAdmin, verifyUser } from "../middlewares/verifyAccess.js";

const router = express.Router();

router.get("/wishlist", verifyUser, getWishlist);
router.get("/", verifyUser, verifyAdmin, allUsers);
router.get("/:id", verifyUser, getUser);
router.delete("/delete/:id", verifyUser, deleteUser);
router.post("/forgot-password-token", forgotPasswordToken);
router.post("/reset-password/:token", resetPassword);
router.post("/update-password", verifyUser, updatePassword);
router.post("/update-user", verifyUser, updateUser);
router.post("/save-address", verifyUser, saveAddress);
router.post("/block-user/:id", verifyUser, verifyAdmin, blockUser);
router.post("/unblock-user/:id", verifyUser, verifyAdmin, unblockUser);

export default router;

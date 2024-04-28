import express from "express";
import {
	allUsers,
	deleteUser,
	getUser,
	updateUser,
	blockUser,
	unblockUser,
} from "../controller/user.controller.js";
import { verifyAdmin, verifyUser } from "../middlewares/verifyAccess.js";

const router = express.Router();

router.get("/", verifyUser, verifyAdmin, allUsers);
router.get("/:id", verifyUser, getUser);
router.delete("/delete/:id", verifyUser, deleteUser);
router.post("/update-user", verifyUser, updateUser);
router.post("/block-user/:id", verifyUser, verifyAdmin, blockUser);
router.post("/unblock-user/:id", verifyUser, verifyAdmin, unblockUser);

export default router;

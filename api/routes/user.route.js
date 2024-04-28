import express from "express";
import {
	allUsers,
	deleteUser,
	getUser,
	updateUser,
} from "../controller/user.controller.js";
import { verifyUser } from "../utils/verifyUser.js";

const router = express.Router();

router.get("/", verifyUser, allUsers);
router.get("/:id", verifyUser, getUser);
router.delete("/delete/:id", verifyUser, deleteUser);
router.post("/update/:id", verifyUser, updateUser);

export default router;

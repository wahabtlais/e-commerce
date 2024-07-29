import express from "express";
import {
	createColor,
	deleteColor,
	getAllColors,
	getColor,
	updateColor,
} from "../controller/color.controller.js";
import { verifyAdmin, verifyUser } from "../middlewares/verifyAccess.js";

const router = express.Router();

router.get("/", getAllColors);
router.get("/:id", getColor);
router.post("/create", verifyUser, verifyAdmin, createColor);
router.post("/update/:id", verifyUser, verifyAdmin, updateColor);
router.delete("/delete/:id", verifyUser, verifyAdmin, deleteColor);

export default router;

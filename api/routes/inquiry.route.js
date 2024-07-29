import express from "express";
import {
	createInquiry,
	deleteInquiry,
	getAllInquirys,
	getInquiry,
	updateInquiry,
} from "../controller/inquiry.controller.js";
import { verifyAdmin, verifyUser } from "../middlewares/verifyAccess.js";

const router = express.Router();

router.get("/", getAllInquirys);
router.get("/:id", getInquiry);
router.post("/create", createInquiry);
router.post("/update/:id", verifyUser, verifyAdmin, updateInquiry);
router.delete("/delete/:id", verifyUser, verifyAdmin, deleteInquiry);

export default router;

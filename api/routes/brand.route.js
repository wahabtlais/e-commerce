import express from "express";
import {
	createBrand,
	deleteBrand,
	getAllBrands,
	getBrand,
	updateBrand,
} from "../controller/brand.controller.js";
import { verifyAdmin, verifyUser } from "../middlewares/verifyAccess.js";

const router = express.Router();

router.get("/", getAllBrands);
router.get("/:id", getBrand);
router.post("/create", verifyUser, verifyAdmin, createBrand);
router.post("/update/:id", verifyUser, verifyAdmin, updateBrand);
router.delete("/delete/:id", verifyUser, verifyAdmin, deleteBrand);

export default router;

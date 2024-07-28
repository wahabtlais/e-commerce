import express from "express";
import {
	createProductCategory,
	deleteProductCategory,
	getAllProductCategories,
	getProductCategory,
	updateProductCategory,
} from "../controller/productCategory.controller.js";
import { verifyAdmin, verifyUser } from "../middlewares/verifyAccess.js";

const router = express.Router();

router.get("/", getAllProductCategories);
router.get("/:id", getProductCategory);
router.post("/create", verifyUser, verifyAdmin, createProductCategory);
router.post("/update/:id", verifyUser, verifyAdmin, updateProductCategory);
router.delete("/delete/:id", verifyUser, verifyAdmin, deleteProductCategory);

export default router;

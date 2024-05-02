import express from "express";
import {
	createProduct,
	deleteProduct,
	getAllProducts,
	getProduct,
	updateProduct,
} from "../controller/product.controller.js";
import { verifyAdmin, verifyUser } from "../middlewares/verifyAccess.js";
const router = express.Router();

router.get("/", getAllProducts);
router.get("/:id", getProduct);
router.post("/create-product", verifyUser, verifyAdmin, createProduct);
router.post("/update-product/:id", verifyUser, verifyAdmin, updateProduct);
router.delete("/delete-product/:id", verifyUser, verifyAdmin, deleteProduct);

export default router;

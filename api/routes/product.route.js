import express from "express";
import {
	addToWishlist,
	createProduct,
	deleteProduct,
	getAllProducts,
	getProduct,
	rating,
	updateProduct,
	uploadImages,
} from "../controller/product.controller.js";
import { verifyAdmin, verifyUser } from "../middlewares/verifyAccess.js";
import { productImgResize, upload } from "../middlewares/uploadImage.js";
const router = express.Router();

router.get("/", getAllProducts);
router.get("/:id", getProduct);
router.post(
	"/upload/:id",
	verifyUser,
	verifyAdmin,
	upload.array("images", 10),
	productImgResize,
	uploadImages
);
router.post("/wishlist", verifyUser, addToWishlist);
router.post("/rating", verifyUser, rating);
router.post("/create-product", verifyUser, verifyAdmin, createProduct);
router.post("/update-product/:id", verifyUser, verifyAdmin, updateProduct);
router.delete("/delete-product/:id", verifyUser, verifyAdmin, deleteProduct);

export default router;

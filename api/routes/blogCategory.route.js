import express from "express";
import {
	createBlogCategory,
	deleteBlogCategory,
	getAllBlogCategories,
	getBlogCategory,
	updateBlogCategory,
} from "../controller/blogCategory.controller.js";
import { verifyAdmin, verifyUser } from "../middlewares/verifyAccess.js";

const router = express.Router();

router.get("/", getAllBlogCategories);
router.get("/:id", getBlogCategory);
router.post("/create", verifyUser, verifyAdmin, createBlogCategory);
router.post("/update/:id", verifyUser, verifyAdmin, updateBlogCategory);
router.delete("/delete/:id", verifyUser, verifyAdmin, deleteBlogCategory);

export default router;

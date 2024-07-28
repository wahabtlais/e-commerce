import express from "express";
import {
	createBlog,
	deleteBlog,
	dislikeBlog,
	getAllBlogs,
	getBlog,
	likeBlog,
	updateBlog,
	uploadImages,
} from "../controller/blog.controller.js";
import { verifyAdmin, verifyUser } from "../middlewares/verifyAccess.js";
import { blogImgResize, upload } from "../middlewares/uploadImage.js";

const router = express.Router();

router.get("/", getAllBlogs);
router.get("/:id", getBlog);
router.put(
	"/upload/:id",
	verifyUser,
	verifyAdmin,
	upload.array("images", 2),
	blogImgResize,
	uploadImages
);
router.post("/create", verifyUser, verifyAdmin, createBlog);
router.post("/update/:id", verifyUser, verifyAdmin, updateBlog);
router.delete("/delete/:id", verifyUser, verifyAdmin, deleteBlog);
router.post("/likes", verifyUser, likeBlog);
router.post("/dislikes", verifyUser, dislikeBlog);

export default router;

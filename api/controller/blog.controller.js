import Blog from "../models/blog.model.js";
import User from "../models/user.model.js";
import asyncHandler from "express-async-handler";
import { validateMongoID } from "../utils/validateMongoID.js";
import { cloudinaryUploadImg } from "../utils/cloudinary.js";
import fs from "fs";

export const createBlog = asyncHandler(async (req, res, next) => {
	try {
		const newBlog = await Blog.create(req.body);
		res.json(newBlog);
	} catch (error) {
		next(error);
	}
});

export const updateBlog = asyncHandler(async (req, res, next) => {
	const { id } = req.params;
	validateMongoID(id);
	try {
		const updatedBlog = await Blog.findByIdAndUpdate(id, req.body, {
			new: true,
		});
		res.json(updatedBlog);
	} catch (error) {
		next(error);
	}
});

export const getBlog = asyncHandler(async (req, res, next) => {
	const { id } = req.params;
	validateMongoID(id);
	try {
		const blog = await Blog.findById(id).populate("likes").populate("dislikes");
		await Blog.findByIdAndUpdate(
			id,
			{
				$inc: { numViews: 1 },
			},
			{
				new: true,
			}
		);
		res.json(blog);
	} catch (error) {
		next(error);
	}
});

export const getAllBlogs = asyncHandler(async (req, res, next) => {
	try {
		const allBlogs = await Blog.find();
		res.json(allBlogs);
	} catch (error) {
		next(error);
	}
});

export const deleteBlog = asyncHandler(async (req, res, next) => {
	const { id } = req.params;
	validateMongoID(id);
	try {
		const deletedBlog = await Blog.findByIdAndDelete(id, req.body, {
			new: true,
		});
		res.json({
			success: true,
			message: "Blog deleted successfully!",
			deletedBlog,
		});
	} catch (error) {
		next(error);
	}
});

export const likeBlog = asyncHandler(async (req, res, next) => {
	const { blogId } = req.body;
	validateMongoID(blogId);
	try {
		const blog = await Blog.findById(blogId);

		const loginUserId = req?.user?._id;

		const isLiked = blog?.isLiked;

		const alreadyDisliked = blog?.dislikes.find(
			(userId) => userId?.toString() === loginUserId.toString()
		);

		if (alreadyDisliked) {
			const blog = await Blog.findByIdAndUpdate(
				blogId,
				{
					$pull: { dislikes: loginUserId },
					isDisliked: false,
				},
				{
					new: true,
				}
			);
			res.json(blog);
		}

		if (isLiked) {
			const blog = await Blog.findByIdAndUpdate(
				blogId,
				{
					$pull: { likes: loginUserId },
					isLiked: false,
				},
				{
					new: true,
				}
			);
			res.json(blog);
		} else {
			const blog = await Blog.findByIdAndUpdate(
				blogId,
				{
					$push: { likes: loginUserId },
					isLiked: true,
				},
				{
					new: true,
				}
			);
			res.json(blog);
		}
	} catch (error) {
		next(error);
	}
});

export const dislikeBlog = asyncHandler(async (req, res, next) => {
	const { blogId } = req.body;
	validateMongoID(blogId);
	try {
		const blog = await Blog.findById(blogId);

		const loginUserId = req?.user?._id;

		const isDisliked = blog?.isDisliked;

		const alreadyLiked = blog?.likes.find(
			(userId) => userId?.toString() === loginUserId.toString()
		);

		if (alreadyLiked) {
			const blog = await Blog.findByIdAndUpdate(
				blogId,
				{
					$pull: { likes: loginUserId },
					isLiked: false,
				},
				{
					new: true,
				}
			);
			res.json(blog);
		}

		if (isDisliked) {
			const blog = await Blog.findByIdAndUpdate(
				blogId,
				{
					$pull: { dislikes: loginUserId },
					isDisliked: false,
				},
				{
					new: true,
				}
			);
			res.json(blog);
		} else {
			const blog = await Blog.findByIdAndUpdate(
				blogId,
				{
					$push: { dislikes: loginUserId },
					isDisliked: true,
				},
				{
					new: true,
				}
			);
			res.json(blog);
		}
	} catch (error) {
		next(error);
	}
});

export const uploadImages = asyncHandler(async (req, res, next) => {
	const { id } = req.params;
	validateMongoID(id);

	try {
		const uploader = (path) => cloudinaryUploadImg(path, "images");
		const urls = [];
		const files = req.files;
		for (const file of files) {
			const { path } = file;
			const newPath = await uploader(path);
			urls.push(newPath);
			fs.unlinkSync(path);
		}
		const findBlog = await Blog.findByIdAndUpdate(
			id,
			{
				images: urls.map((file) => {
					return file;
				}),
			},
			{
				new: true,
			}
		);
		res.json(findBlog);
	} catch (error) {
		next(error);
	}
});

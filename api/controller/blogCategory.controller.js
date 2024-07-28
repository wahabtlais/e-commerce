import BlogCategory from "../models/blogCategory.model.js";
import asyncHandler from "express-async-handler";
import { validateMongoID } from "../utils/validateMongoID.js";

export const createBlogCategory = asyncHandler(async (req, res, next) => {
	try {
		const newBlogCategory = await BlogCategory.create(req.body);
		res.json({
			status: "success",
			newBlogCategory,
		});
	} catch (error) {
		next(error);
	}
});

export const updateBlogCategory = asyncHandler(async (req, res, next) => {
	const { id } = req.params;
	try {
		const updatedBlogCategory = await BlogCategory.findByIdAndUpdate(
			id,
			req.body,
			{ new: true }
		);
		if (!updatedBlogCategory) {
			return next(error("Blog category not found!"));
		}
		res.json({ status: "success", updatedBlogCategory });
	} catch (error) {
		next(error);
	}
});

export const deleteBlogCategory = asyncHandler(async (req, res, next) => {
	const { id } = req.params;
	try {
		const deletedBlogCategory = await BlogCategory.findByIdAndDelete(id);
		if (!deletedBlogCategory) {
			return next(error("Blog category not found!"));
		}
		res.json({
			status: "success",
			message: "Blog category deleted successfully!",
			deletedBlogCategory,
		});
	} catch (error) {
		next(error);
	}
});

export const getBlogCategory = asyncHandler(async (req, res, next) => {
	const { id } = req.params;
	validateMongoID(id);

	try {
		const blogCategory = await BlogCategory.findById(id);
		if (!blogCategory) {
			return next(error("Blog category not found!"));
		}
		res.json({ status: "success", blogCategory });
	} catch (error) {
		next(error);
	}
});

export const getAllBlogCategories = asyncHandler(async (req, res, next) => {
	try {
		const blogCategories = await BlogCategory.find();

		res.json({ status: "success", blogCategories });
	} catch (error) {
		next(error);
	}
});

import Product from "../models/product.model.js";
import asyncHandler from "express-async-handler";
import slugify from "slugify";
import { error } from "../utils/error.js";

export const createProduct = asyncHandler(async (req, res, next) => {
	try {
		if (req.body.title) {
			req.body.slug = slugify(req.body.title);
		}
		const newProduct = await Product.create(req.body);
		return res.status(201).json(newProduct);
	} catch (error) {
		next(error);
	}
});

export const getProduct = asyncHandler(async (req, res, next) => {
	const { id } = req.params;
	try {
		const product = await Product.findById(id);
		res.json(product);
	} catch (error) {
		next(error);
	}
});

export const getAllProducts = asyncHandler(async (req, res, next) => {
	try {
		//* Filtering
		const queryObj = { ...req.query };
		const excludedFields = ["page", "sort", "limit", "fields"];
		excludedFields.forEach((el) => delete queryObj[el]);
		let queryStr = JSON.stringify(queryObj);
		queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

		let query = Product.find(JSON.parse(queryStr));

		//* Sorting
		if (req.query.sort) {
			const sortBy = req.query.sort.split(",").join(" ");
			query = query.sort(sortBy);
		} else {
			query = query.sort("-createdAt");
		}

		//* Limiting the fields
		if (req.query.fields) {
			const fields = req.query.fields.split(",").join(" ");
			query = query.select(fields);
		} else {
			query = query.select("-__v");
		}

		//* Pagination
		const page = req.query.page;
		const limit = req.query.limit;
		const skip = (page - 1) * limit;
		query = query.skip(skip).limit(limit);
		if (req.query.page) {
			const productCount = await Product.countDocuments();
			if (skip >= productCount) throw new Error("This page does not exist!");
		}

		const products = await query;
		res.json(products);
	} catch (error) {
		next(error);
	}
});

export const updateProduct = asyncHandler(async (req, res, next) => {
	// Find the existing product by id
	const product = await Product.findById(req.params.id);
	if (!product) return next(error(404, "Product not found!"));

	try {
		const updatedProduct = await Product.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true } // Return the updated document rather than the original one
		);
		res.status(200).json(updatedProduct);
	} catch (error) {
		next(error);
	}
});

export const deleteProduct = asyncHandler(async (req, res, next) => {
	const product = await Product.findById(req.params.id);
	if (!product) return next(error(404, "Product not found!"));

	try {
		await Product.findByIdAndDelete(req.params.id);
		res.status(200).json({ message: "Product deleted successfully!" });
	} catch (error) {
		next(error);
	}
});

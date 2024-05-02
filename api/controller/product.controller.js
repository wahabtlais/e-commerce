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
		const products = await Product.find({});
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

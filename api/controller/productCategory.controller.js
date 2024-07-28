import ProductCategory from "../models/productCategory.model.js";
import asyncHandler from "express-async-handler";
import { validateMongoID } from "../utils/validateMongoID.js";

export const createProductCategory = asyncHandler(async (req, res, next) => {
	try {
		const newProductCategory = await ProductCategory.create(req.body);
		res.json({
			status: "success",
			newProductCategory,
		});
	} catch (error) {
		next(error);
	}
});

export const updateProductCategory = asyncHandler(async (req, res, next) => {
	const { id } = req.params;
	try {
		const updatedProductCategory = await ProductCategory.findByIdAndUpdate(
			id,
			req.body,
			{ new: true }
		);
		if (!updatedProductCategory) {
			return next(error("Product category not found!"));
		}
		res.json({ status: "success", updatedProductCategory });
	} catch (error) {
		next(error);
	}
});

export const deleteProductCategory = asyncHandler(async (req, res, next) => {
	const { id } = req.params;
	try {
		const deletedProductCategory = await ProductCategory.findByIdAndDelete(id);
		if (!deletedProductCategory) {
			return next(error("Product category not found!"));
		}
		res.json({
			status: "success",
			message: "Product category deleted successfully!",
			deletedProductCategory,
		});
	} catch (error) {
		next(error);
	}
});

export const getProductCategory = asyncHandler(async (req, res, next) => {
	const { id } = req.params;
	validateMongoID(id);

	try {
		const productCategory = await ProductCategory.findById(id);
		if (!productCategory) {
			return next(error("Product category not found!"));
		}
		res.json({ status: "success", productCategory });
	} catch (error) {
		next(error);
	}
});

export const getAllProductCategories = asyncHandler(async (req, res, next) => {
	try {
		const productCategories = await ProductCategory.find();

		res.json({ status: "success", productCategories });
	} catch (error) {
		next(error);
	}
});

import Product from "../models/product.model.js";
import asyncHandler from "express-async-handler";

export const createProduct = asyncHandler(async (req, res, next) => {
	try {
		const newProduct = await Product.create(req.body);
		return res.status(201).json(newProduct);
	} catch (error) {
		next(error);
	}
});

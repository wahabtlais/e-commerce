import Brand from "../models/brand.model.js";
import asyncHandler from "express-async-handler";
import { validateMongoID } from "../utils/validateMongoID.js";

export const createBrand = asyncHandler(async (req, res, next) => {
	try {
		const newBrand = await Brand.create(req.body);
		res.json({
			status: "success",
			newBrand,
		});
	} catch (error) {
		next(error);
	}
});

export const updateBrand = asyncHandler(async (req, res, next) => {
	const { id } = req.params;
	try {
		const updatedBrand = await Brand.findByIdAndUpdate(id, req.body, {
			new: true,
		});
		if (!updatedBrand) {
			throw new Error("Brand not found!");
		}
		res.json({ status: "success", updatedBrand });
	} catch (error) {
		next(error);
	}
});

export const deleteBrand = asyncHandler(async (req, res, next) => {
	const { id } = req.params;
	try {
		const deletedBrand = await Brand.findByIdAndDelete(id);
		if (!deletedBrand) {
			throw new Error("Brand not found!");
		}
		res.json({
			status: "success",
			message: "Brand deleted successfully!",
			deletedBrand,
		});
	} catch (error) {
		next(error);
	}
});

export const getBrand = asyncHandler(async (req, res, next) => {
	const { id } = req.params;
	validateMongoID(id);

	try {
		const brand = await Brand.findById(id);
		if (!brand) {
			throw new Error("Brand not found!");
		}
		res.json({ status: "success", brand });
	} catch (error) {
		next(error);
	}
});

export const getAllBrands = asyncHandler(async (req, res, next) => {
	try {
		const brands = await Brand.find();

		res.json({ status: "success", brands });
	} catch (error) {
		next(error);
	}
});

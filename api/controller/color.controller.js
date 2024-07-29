import Color from "../models/color.model.js";
import asyncHandler from "express-async-handler";
import { validateMongoID } from "../utils/validateMongoID.js";

export const createColor = asyncHandler(async (req, res, next) => {
	try {
		const newColor = await Color.create(req.body);
		res.json({
			status: "success",
			newColor,
		});
	} catch (error) {
		next(error);
	}
});

export const updateColor = asyncHandler(async (req, res, next) => {
	const { id } = req.params;
	try {
		const updatedColor = await Color.findByIdAndUpdate(id, req.body, {
			new: true,
		});
		if (!updatedColor) {
			throw new Error("Color not found!");
		}
		res.json({ status: "success", updatedColor });
	} catch (error) {
		next(error);
	}
});

export const deleteColor = asyncHandler(async (req, res, next) => {
	const { id } = req.params;
	try {
		const deletedColor = await Color.findByIdAndDelete(id);
		if (!deletedColor) {
			throw new Error("Color not found!");
		}
		res.json({
			status: "success",
			message: "Color deleted successfully!",
			deletedColor,
		});
	} catch (error) {
		next(error);
	}
});

export const getColor = asyncHandler(async (req, res, next) => {
	const { id } = req.params;
	validateMongoID(id);

	try {
		const color = await Color.findById(id);
		if (!color) {
			throw new Error("Color not found!");
		}
		res.json({ status: "success", color });
	} catch (error) {
		next(error);
	}
});

export const getAllColors = asyncHandler(async (req, res, next) => {
	try {
		const colors = await Color.find();

		res.json({ status: "success", colors });
	} catch (error) {
		next(error);
	}
});

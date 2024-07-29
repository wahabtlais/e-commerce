import Inquiry from "../models/inquiry.model.js";
import asyncHandler from "express-async-handler";
import { validateMongoID } from "../utils/validateMongoID.js";

export const createInquiry = asyncHandler(async (req, res, next) => {
	try {
		const newInquiry = await Inquiry.create(req.body);
		res.json({
			status: "success",
			newInquiry,
		});
	} catch (error) {
		next(error);
	}
});

export const updateInquiry = asyncHandler(async (req, res, next) => {
	const { id } = req.params;
	try {
		const updatedInquiry = await Inquiry.findByIdAndUpdate(id, req.body, {
			new: true,
		});
		if (!updatedInquiry) {
			throw new Error("Inquiry not found!");
		}
		res.json({ status: "success", updatedInquiry });
	} catch (error) {
		next(error);
	}
});

export const deleteInquiry = asyncHandler(async (req, res, next) => {
	const { id } = req.params;
	try {
		const deletedInquiry = await Inquiry.findByIdAndDelete(id);
		if (!deletedInquiry) {
			throw new Error("Inquiry not found!");
		}
		res.json({
			status: "success",
			message: "Inquiry deleted successfully!",
			deletedInquiry,
		});
	} catch (error) {
		next(error);
	}
});

export const getInquiry = asyncHandler(async (req, res, next) => {
	const { id } = req.params;
	validateMongoID(id);

	try {
		const inquiry = await Inquiry.findById(id);
		if (!inquiry) {
			throw new Error("Inquiry not found!");
		}
		res.json({ status: "success", inquiry });
	} catch (error) {
		next(error);
	}
});

export const getAllInquirys = asyncHandler(async (req, res, next) => {
	try {
		const inquirys = await Inquiry.find();

		res.json({ status: "success", inquirys });
	} catch (error) {
		next(error);
	}
});

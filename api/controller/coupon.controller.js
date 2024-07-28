import Coupon from "../models/coupon.model.js";
import { validateMongoID } from "../utils/validateMongoID.js";
import asyncHandler from "express-async-handler";

export const createCoupon = asyncHandler(async (req, res, next) => {
	try {
		const newCoupon = await Coupon.create(req.body);
		res.status(201).json({
			status: "success",
			newCoupon,
		});
	} catch (error) {
		next(error);
	}
});

export const updateCoupon = asyncHandler(async (req, res, next) => {
	const { id } = req.params;
	validateMongoID(id);
	try {
		const updatedCoupon = await Coupon.findByIdAndUpdate(id, req.body, {
			new: true,
		});
		res.json({ status: "success", updatedCoupon });
	} catch (error) {
		next(error);
	}
});

export const deleteCoupon = asyncHandler(async (req, res, next) => {
	const { id } = req.params;
	validateMongoID(id);
	try {
		const deletedCoupon = await Coupon.findByIdAndDelete(id);
		res.json({ status: "success", deletedCoupon });
	} catch (error) {
		next(error);
	}
});

export const getCoupon = asyncHandler(async (req, res, next) => {
	const { id } = req.params;
	validateMongoID(id);
	try {
		const coupon = await Coupon.findById(id);
		res.json({ status: "success", coupon });
	} catch (error) {
		next(error);
	}
});

export const getAllCoupons = asyncHandler(async (req, res, next) => {
	try {
		const coupons = await Coupon.find();
		res.status(201).json({
			status: "success",
			coupons,
		});
	} catch (error) {
		next(error);
	}
});

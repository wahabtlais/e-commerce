import Cart from "../models/cart.model.js";
import Coupon from "../models/coupon.model.js";
import User from "../models/user.model.js";
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

export const applyCoupon = asyncHandler(async (req, res, next) => {
	const { coupon } = req.body;
	const { _id } = req.user;
	validateMongoID(_id);

	try {
		const validCoupon = await Coupon.findOne({ name: coupon });
		if (validCoupon === null) {
			return res.status(404).json({
				status: "error",
				message: "Coupon not found",
			});
		}
		const user = await User.findOne({ _id });
		let { cartTotal } = await Cart.findOne({ orderedBy: user._id }).populate(
			"products.product"
		);

		let totalAfterDiscount = (
			cartTotal -
			(cartTotal * validCoupon.discount) / 100
		).toFixed(2);
		await Cart.findOneAndUpdate(
			{ orderedBy: user._id },
			{ totalAfterDiscount },
			{ new: true }
		);
		res.json(totalAfterDiscount);
	} catch (error) {
		next(error);
	}
});

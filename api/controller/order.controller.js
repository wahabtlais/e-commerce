import asyncHandler from "express-async-handler";
import { validateMongoID } from "../utils/validateMongoID.js";
import User from "../models/user.model.js";
import Cart from "../models/cart.model.js";
import Order from "../models/order.model.js";
import Product from "../models/product.model.js";
import uniqid from "uniqid";

export const createOrder = asyncHandler(async (req, res, next) => {
	const { COD, couponApplied } = req.body;
	const { _id } = req.user;
	validateMongoID(_id);

	try {
		if (!COD) throw new Error("Create cash order failed!");
		const user = await User.findById(_id);
		let userCart = await Cart.findOne({ orderedBy: user._id });
		let finalAmount = 0;
		if (couponApplied && userCart.totalAfterDiscount) {
			finalAmount = userCart.totalAfterDiscount;
		} else {
			finalAmount = userCart.cartTotal;
		}

		let newOrder = await new Order({
			products: userCart.products,
			paymentIntent: {
				id: uniqid(),
				method: "COD",
				amount: finalAmount,
				status: "Cash on Delivery",
				created: Date.now(),
				currency: "usd",
			},
			orderedBy: user._id,
			orderStatus: "Cash on Delivery",
		}).save();

		let update = userCart.products.map((item) => {
			return {
				updateOne: {
					filter: { _id: item.product._id },
					update: { $inc: { quantity: -item.count, sold: +item.count } },
				},
			};
		});

		const updated = await Product.bulkWrite(update, {});
		res.json({ message: "Order created successfully!" });
	} catch (error) {
		next(error);
	}
});

export const getOrders = asyncHandler(async (req, res, next) => {
	const { _id } = req.user;
	validateMongoID(_id);

	try {
		const userOrders = await Order.findOne({ orderedBy: _id })
			.populate("products.product")
			.populate("orderedBy")
			.exec();
		res.json(userOrders);
	} catch (error) {
		next(error);
	}
});

export const getAllOrders = asyncHandler(async (req, res, next) => {
	try {
		const allOrders = await Order.find()
			.populate("products.product")
			.populate("orderedBy")
			.exec();
		res.json(allOrders);
	} catch (error) {
		next(error);
	}
});

// export const getOrderByUserId = asyncHandler(async (req, res, next) => {
// 	const { id } = req.params;
// 	validateMongoID(id);
// 	try {
// 		const userorders = await Order.findOne({ orderby: id })
// 			.populate("products.product")
// 			.populate("orderby")
// 			.exec();
// 		res.json(userorders);
// 	} catch (error) {
// 		next(error);
// 	}
// });

export const updateOrdersStatus = asyncHandler(async (req, res, next) => {
	const { status } = req.body;
	const { id } = req.params;
	validateMongoID(id);

	try {
		const updateOrderStatus = await Order.findByIdAndUpdate(
			id,
			{
				orderStatus: status,
				paymentIntent: {
					status,
				},
			},
			{
				new: true,
			}
		);
		res.json(updateOrderStatus);
	} catch (error) {
		next(error);
	}
});

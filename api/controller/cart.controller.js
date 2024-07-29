import asyncHandler from "express-async-handler";
import { validateMongoID } from "../utils/validateMongoID.js";
import User from "../models/user.model.js";
import Cart from "../models/cart.model.js";
import Product from "../models/product.model.js";

export const addToCart = asyncHandler(async (req, res, next) => {
	const { cart } = req.body;
	const { _id } = req.user;
	validateMongoID(_id);

	try {
		let products = [];
		const user = await User.findById(_id);
		const alreadyExistProducts = await Cart.findOne({ orderedBy: user._id });
		if (alreadyExistProducts) {
			alreadyExistProducts.remove();
		}
		console.log(cart.length);
		for (let i = 0; i < cart.length; i++) {
			let object = {};
			object.product = cart[i]._id;
			object.count = cart[i].count;
			object.color = cart[i].color;

			let getPrice = await Product.findById(cart[i]._id).select("price").exec();
			object.price = getPrice.price;
			products.push(object);
		}

		let cartTotal = 0;
		for (let i = 0; i < products.length; i++) {
			cartTotal += products[i].price * products[i].count;
		}

		let newCart = await new Cart({
			products,
			cartTotal,
			orderedBy: user._id,
		}).save();

		res.json({
			success: true,
			message: "Cart updated successfully!",
			cart: newCart,
		});
	} catch (error) {
		next(error);
	}
});

export const getUserCart = asyncHandler(async (req, res, next) => {
	const { _id } = req.user;
	validateMongoID(_id);

	try {
		const cart = await Cart.findOne({ orderedBy: _id }).populate(
			"products.product"
		);
		res.json(cart);
	} catch (error) {
		next(error);
	}
});

export const emptyCart = asyncHandler(async (req, res, next) => {
	const { _id } = req.user;
	validateMongoID(_id);

	try {
		const user = await User.findOne({ _id });
		const cart = await Cart.findOneAndDelete({ orderedBy: user._id });
		res.json(cart);
	} catch (error) {
		next(error);
	}
});

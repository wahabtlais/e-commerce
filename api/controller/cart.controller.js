import asyncHandler from "express-async-handler";
import { validateMongoID } from "../utils/validateMongoID.js";
import User from "../models/user.model.js";
import Cart from "../models/cart.model.js";
import Product from "../models/product.model.js";

export const userCart = asyncHandler(async (req, res, next) => {
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

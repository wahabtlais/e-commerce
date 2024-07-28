import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
	{
		products: [
			{
				product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
				count: Number,
				color: String,
			},
		],
		paymentIntent: {},
		orderStatus: {
			type: String,
			default: "Not Proccessed",
			enum: [
				"Not Proccessed",
				"Cash on Delivery",
				"Processing",
				"Dispatched",
				"Cancelled",
				"Delivered",
			],
		},
		orderedBy: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
	},
	{
		timestamps: true,
	}
);

const Order = mongoose.model("Order", orderSchema);

export default Order;

import mongoose, { Schema } from "mongoose";

// Declare the Schema of the Mongo model
const userSchema = new mongoose.Schema(
	{
		firstname: {
			type: String,
			required: true,
		},
		lastname: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		mobile: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		profilePicture: {
			type: String,
			default:
				"https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2264922221.jpg",
		},
		isAdmin: {
			type: Boolean,
			default: false,
		},
		isBlocked: {
			type: Boolean,
			default: false,
		},
		cart: {
			type: Array,
			default: [],
		},
		address: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Address",
			},
		],
		wishlist: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Product",
			},
		],
		refreshToken: {
			type: String,
		},
	},
	{
		timestamps: true,
	}
);

//Export the model
const User = mongoose.model("User", userSchema);

export default User;

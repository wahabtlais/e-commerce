import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import crypto from "crypto";

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
		passwordChangedAt: Date,
		passwordResetToken: String,
		passwordResetExpires: Date,
	},
	{
		timestamps: true,
	}
);

userSchema.pre("save", async function (next) {
	if (!this.isModified("password")) {
		next();
	}
});

userSchema.methods.createPasswordResetToken = async function () {
	const resetToken = crypto.randomBytes(32).toString("hex");
	this.passwordResetToken = crypto
		.createHash("sha256")
		.update(resetToken)
		.digest("hex");
	this.passwordResetExpires = Date.now() + 10 * 60 * 1000; //* 10 minutes
	return resetToken;
};

//Export the model
const User = mongoose.model("User", userSchema);

export default User;

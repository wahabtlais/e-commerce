import asyncHandler from "express-async-handler";
import User from "../models/user.model.js";
import { error } from "../utils/error.js";
import bcrypt from "bcrypt";

//! Get all users
export const allUsers = asyncHandler(async (req, res, next) => {
	try {
		const getUsers = await User.find({}, { __v: false, password: false });
		res.status(200).json(getUsers);
	} catch (error) {
		next(error);
	}
});

//! Get user by id
export const getUser = asyncHandler(async (req, res, next) => {
	try {
		const user = await User.findById(req.params.id);

		if (!user) return next(new ErrorResponse("User not found!", 404));
		const { password: pass, ...rest } = user._doc; // Remove password field while sending response

		res.status(200).json(rest);
	} catch (error) {
		throw new Error(error);
	}
});

//! Delete user by id
export const deleteUser = asyncHandler(async (req, res, next) => {
	if (req.user.id !== req.params.id)
		return next(error(401, "You are not authorized to delete this user!"));

	try {
		await User.findByIdAndDelete(req.params.id);
		res.clearCookie("access_token");
		res.status(200).json({
			success: true,
			message: "User deleted successfully!",
		});
	} catch (error) {
		throw new Error(error);
	}
});
//! Update user by id
export const updateUser = asyncHandler(async (req, res, next) => {
	if (req.user.id !== req.params.id)
		return next(error(401, "You are not authorized to update this user!"));

	try {
		if (req.body.password) {
			req.body.password = bcrypt.hashSync(req.body.password, 10);
		}
		const updatedUser = await User.findByIdAndUpdate(
			req.params.id,
			{
				$set: {
					firstname: req.body.firstname,
					lastname: req.body.lastname,
					email: req.body.email,
					mobile: req.body.mobile,
					password: req.body.password,
					profilePicture: req.body.profilePicture,
					isAdmin: req.body.isAdmin,
				},
			},
			{ new: true }
		);
		const { password, ...rest } = updatedUser._doc;
		return res.status(200).json(rest);
	} catch (error) {
		console.log(error);
	}
});

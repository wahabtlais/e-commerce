import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import { generateRefreshToken } from "../config/refreshToken.js";

//! Register a new user
export const register = asyncHandler(async (req, res, next) => {
	const email = req.body.email;
	const findUser = await User.findOne({ email });

	if (!findUser) {
		// Create a new user
		const { firstname, lastname, email, mobile, password } = req.body;
		const hashedPassword = bcrypt.hashSync(password, 10);
		const newUser = new User({
			firstname,
			lastname,
			email,
			mobile,
			password: hashedPassword,
		});
		try {
			await newUser.save();
			res
				.status(201)
				.json({ message: "User created successfully!", success: true });
		} catch (error) {
			next(error);
		}
	} else {
		// Send an error message
		throw new Error("User already exist!");
	}
});

//! Login a user
export const login = asyncHandler(async (req, res, next) => {
	const { email, password } = req.body;
	try {
		const validUser = await User.findOne({ email });
		if (!validUser)
			return res
				.status(404)
				.json({ message: "User not found!", success: false });
		const validPassword = bcrypt.compareSync(password, validUser.password);
		if (!validPassword)
			return res
				.status(403)
				.json({ message: "Invalid Credentials", success: false });

		const refreshToken = generateRefreshToken(validUser?._id);
		// Save refresh token to database
		const updateUser = await User.findByIdAndUpdate(
			validUser._id,
			{ refreshToken },
			{ new: true }
		);
		const { password: hashedPassword, ...rest } = validUser._doc;
		res
			.cookie("refresh_token", refreshToken, {
				httpOnly: true,
				maxAge: 72 * 60 * 60 * 1000,
			})
			.status(200)
			.json(rest);
	} catch (error) {
		next(error);
	}
});

//! Logout
export const logout = asyncHandler(async (req, res, next) => {
	const cookie = req.cookies;
	const refreshToken = cookie.refresh_token;

	if (!refreshToken) {
		return res.status(400).json({ message: "Refresh token is required" });
	}

	// Set the refresh token field to an empty string
	try {
		await User.findOneAndUpdate({ refreshToken }, { refreshToken: "" });
	} catch (error) {
		return res
			.status(500)
			.json({ message: "Failed to clear refresh token from user" });
	}

	// Clear the refresh token cookie
	res.clearCookie("refresh_token", {
		httpOnly: true,
		secure: true,
	});
	// res.clearCookie("access_token");

	// res.setHeader("Authorization", ""); // Clear the Authorization header

	return res.sendStatus(204); // No content
});

//! Handle Refresh Token
export const handleRefreshToken = asyncHandler(async (req, res) => {
	const cookie = req.cookies;
	if (!cookie?.refresh_token) throw new Error("No refresh token!");
	const refreshToken = cookie.refresh_token;
	const user = await User.findOne({ refreshToken });
	if (!user) throw new Error("No user found!");
	jwt.verify(refreshToken, process.env.JWT_SECRET, (err, decoded) => {
		if (err || user.id !== decoded.id) {
			throw new Error("Something went wrong with refresh token!");
		}
		const access_token = jwt.sign({ id: user?._id }, process.env.JWT_SECRET, {
			expiresIn: "1d",
		});
		res.status(200).json({ access_token });
	});
});

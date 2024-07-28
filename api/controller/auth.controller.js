import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import { generateRefreshToken } from "../config/refreshToken.js";
import { generateToken } from "../config/generateToken.js";

//! Register a new user
export const register = asyncHandler(async (req, res) => {
	const email = req.body.email;
	const findUser = await User.findOne({ email: email });

	if (!findUser) {
		const newUser = await User.create(req.body);
		res.json(newUser);
	} else {
		throw new Error("User Already Exists");
	}
});

//! Login a user
export const login = asyncHandler(async (req, res) => {
	const { email, password } = req.body;
	// check if user exists or not
	const findUser = await User.findOne({ email });
	if (findUser && (await findUser.isPasswordMatched(password))) {
		const refreshToken = await generateRefreshToken(findUser?._id);
		const updateuser = await User.findByIdAndUpdate(
			findUser.id,
			{
				refreshToken: refreshToken,
			},
			{ new: true }
		);
		res.cookie("refreshToken", refreshToken, {
			httpOnly: true,
			maxAge: 72 * 60 * 60 * 1000,
		});
		res.json({
			_id: findUser?._id,
			firstname: findUser?.firstname,
			lastname: findUser?.lastname,
			email: findUser?.email,
			mobile: findUser?.mobile,
			token: generateToken(findUser?._id),
		});
	} else {
		throw new Error("Invalid Credentials");
	}
});

//! Login a Admin
export const adminLogin = asyncHandler(async (req, res) => {
	const { email, password } = req.body;
	// check if user exists or not
	const findAdmin = await User.findOne({ email });
	if (findAdmin.isAdmin !== true) throw new Error("Not Authorised");
	if (findAdmin && (await findAdmin.isPasswordMatched(password))) {
		const refreshToken = await generateRefreshToken(findAdmin?._id);
		const updateuser = await User.findByIdAndUpdate(
			findAdmin.id,
			{
				refreshToken: refreshToken,
			},
			{ new: true }
		);
		res.cookie("refreshToken", refreshToken, {
			httpOnly: true,
			maxAge: 72 * 60 * 60 * 1000,
		});
		res.json({
			_id: findAdmin?._id,
			firstname: findAdmin?.firstname,
			lastname: findAdmin?.lastname,
			email: findAdmin?.email,
			mobile: findAdmin?.mobile,
			token: generateToken(findAdmin?._id),
		});
	} else {
		throw new Error("Invalid Credentials");
	}
});

//! Logout
export const logout = asyncHandler(async (req, res) => {
	const cookie = req.cookies;
	if (!cookie?.refreshToken) throw new Error("No Refresh Token in Cookies");
	const refreshToken = cookie.refreshToken;
	const user = await User.findOne({ refreshToken });
	if (!user) {
		res.clearCookie("refreshToken", {
			httpOnly: true,
			secure: true,
		});
		return res.sendStatus(204); // forbidden
	}
	await User.findOneAndUpdate({ refreshToken }, { refreshToken: "" });
	res.clearCookie("refreshToken", {
		httpOnly: true,
		secure: true,
	});
	res.sendStatus(204); // forbidden
});

//! Handle Refresh Token
export const handleRefreshToken = asyncHandler(async (req, res) => {
	const cookie = req.cookies;
	if (!cookie?.refreshToken) throw new Error("No Refresh Token in Cookies");
	const refreshToken = cookie.refreshToken;
	const user = await User.findOne({ refreshToken });
	if (!user) throw new Error(" No Refresh token present in db or not matched");
	jwt.verify(refreshToken, process.env.JWT_SECRET, (err, decoded) => {
		if (err || user.id !== decoded.id) {
			throw new Error("There is something wrong with refresh token");
		}
		const accessToken = generateToken(user?._id);
		res.json({ accessToken });
	});
});

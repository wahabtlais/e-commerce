import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";

// Register a new user

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

// Login a user
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
		const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
		const { password: hashedPassword, ...rest } = validUser._doc;
		const expiryDate = new Date(Date.now() + 3600000); // 1 hour
		res
			.cookie("access_token", token, { httpOnly: true, expires: expiryDate })
			.status(200)
			.json(rest);
	} catch (error) {
		next(error);
	}
});

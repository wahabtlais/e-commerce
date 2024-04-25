import User from "../models/user.model.js";
import bcrypt from "bcrypt";

// Register a new user

export const register = async (req, res, next) => {
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
		res.status(409).json({ message: "User already exist!", success: false });
	}
};

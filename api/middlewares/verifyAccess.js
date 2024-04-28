import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/user.model.js";

// export const verifyUser = (req, res, next) => {
// 	const token = req.cookies.access_token;
// 	if (!token) return next(error(401, "You're not logged in!"));
// 	jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
// 		if (err) return next(error(403, "Token is not valid!"));

// 		req.user = user;
// 		next();
// 	});
// };

export const verifyUser = asyncHandler(async (req, res, next) => {
	let token;
	if (req?.headers?.authorization?.startsWith("Bearer")) {
		token = req.headers.authorization.split(" ")[1];

		try {
			if (token) {
				const decoded = jwt.verify(token, process.env.JWT_SECRET);
				const user = await User.findById(decoded?.id);
				req.user = user;
				next();
			}
		} catch (error) {
			throw new Error("Not authorized, token failed");
		}
	} else {
		throw new Error("Not authorized, token is not valid!");
	}
});

export const verifyAdmin = asyncHandler(async (req, res, next) => {
	const { id } = req.user.id;
	const adminUser = await User.findOne({ id });

	if (adminUser.isAdmin !== true) {
		throw new Error(
			"Permission Denied: Admin privileges required for this operation."
		);
	} else {
		next();
	}
});

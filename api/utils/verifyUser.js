import jwt from "jsonwebtoken";
import { error } from "./error.js";

export const verifyUser = (req, res, next) => {
	const token = req.cookies.access_token;
	if (!token) return next(error(401, "You're not logged in!"));
	jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
		if (err) return next(error(403, "Token is not valid!"));

		req.user = user;
		next();
	});
};

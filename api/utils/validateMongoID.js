import mongoose from "mongoose";

export const validateMongoID = (id) => {
	const isValid = mongoose.Types.ObjectId.isValid(id);
	if (!isValid) throw new Error("Invalid ID");
};

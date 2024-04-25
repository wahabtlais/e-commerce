import mongoose from "mongoose";

const dbConnect = () => {
	try {
		mongoose.connect(process.env.MONGODB_URL);
		console.log("MongoDB Connected Successfully!");
	} catch (error) {
		console.log(error);
	}
};

export default dbConnect;

import mongoose from "mongoose";

// Declare the Schema of the Mongo model
const colorSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			unique: true,
			index: true,
		},
	},
	{
		timestamps: true,
	}
);

//Export the model
const Color = mongoose.model("Color", colorSchema);

export default Color;

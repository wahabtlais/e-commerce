import mongoose from "mongoose";

// Declare the Schema of the Mongo model
const BrandSchema = new mongoose.Schema(
	{
		title: {
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
const brandCategory = mongoose.model("Brand", BrandSchema);

export default brandCategory;

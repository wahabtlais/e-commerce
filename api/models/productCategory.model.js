import mongoose from "mongoose";

// Declare the Schema of the Mongo model
const ProductCategorySchema = new mongoose.Schema(
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
const productCategory = mongoose.model(
	"ProductCategory",
	ProductCategorySchema
);

export default productCategory;

import mongoose from "mongoose";

// Declare the Schema of the Mongo model
const BlogCategorySchema = new mongoose.Schema(
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
const blogCategory = mongoose.model("BlogCategory", BlogCategorySchema);

export default blogCategory;

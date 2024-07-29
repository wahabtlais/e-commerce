import Product from "../models/product.model.js";
import asyncHandler from "express-async-handler";
import slugify from "slugify";
import { error } from "../utils/error.js";
import User from "../models/user.model.js";
import { validateMongoID } from "../utils/validateMongoID.js";
import {
	cloudinaryDeleteImg,
	cloudinaryUploadImg,
} from "../utils/cloudinary.js";
import fs from "fs-extra";

export const createProduct = asyncHandler(async (req, res, next) => {
	try {
		if (req.body.title) {
			req.body.slug = slugify(req.body.title);
		}
		const newProduct = await Product.create(req.body);
		return res.status(201).json(newProduct);
	} catch (error) {
		next(error);
	}
});

export const getProduct = asyncHandler(async (req, res, next) => {
	const { id } = req.params;
	try {
		const product = await Product.findById(id);
		res.json(product);
	} catch (error) {
		next(error);
	}
});

export const getAllProducts = asyncHandler(async (req, res, next) => {
	try {
		//* Filtering
		const queryObj = { ...req.query };
		const excludedFields = ["page", "sort", "limit", "fields"];
		excludedFields.forEach((el) => delete queryObj[el]);
		let queryStr = JSON.stringify(queryObj);
		queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

		let query = Product.find(JSON.parse(queryStr));

		//* Sorting
		if (req.query.sort) {
			const sortBy = req.query.sort.split(",").join(" ");
			query = query.sort(sortBy);
		} else {
			query = query.sort("-createdAt");
		}

		//* Limiting the fields
		if (req.query.fields) {
			const fields = req.query.fields.split(",").join(" ");
			query = query.select(fields);
		} else {
			query = query.select("-__v");
		}

		//* Pagination
		const page = req.query.page;
		const limit = req.query.limit;
		const skip = (page - 1) * limit;
		query = query.skip(skip).limit(limit);
		if (req.query.page) {
			const productCount = await Product.countDocuments();
			if (skip >= productCount) throw new Error("This page does not exist!");
		}

		const products = await query;
		res.json(products);
	} catch (error) {
		next(error);
	}
});

export const updateProduct = asyncHandler(async (req, res, next) => {
	// Find the existing product by id
	const product = await Product.findById(req.params.id);
	if (!product) return next(error(404, "Product not found!"));

	try {
		const updatedProduct = await Product.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true } // Return the updated document rather than the original one
		);
		res.status(200).json(updatedProduct);
	} catch (error) {
		next(error);
	}
});

export const deleteProduct = asyncHandler(async (req, res, next) => {
	const product = await Product.findById(req.params.id);
	if (!product) return next(error(404, "Product not found!"));

	try {
		await Product.findByIdAndDelete(req.params.id);
		res.status(200).json({ message: "Product deleted successfully!" });
	} catch (error) {
		next(error);
	}
});

export const addToWishlist = asyncHandler(async (req, res, next) => {
	const { _id } = req.user;
	const { productId } = req.body;

	try {
		const loggedInUser = await User.findById(_id);
		if (!loggedInUser) return next(error(404, "User not found!"));

		const alreadyAdded = loggedInUser.wishlist.find(
			(id) => id.toString() === productId
		);
		if (alreadyAdded) {
			let user = await User.findByIdAndUpdate(
				_id,
				{
					$pull: { wishlist: productId },
				},
				{ new: true }
			);

			res.status(200).json({ message: "Product removed from wishlist!", user });
		} else {
			let user = await User.findByIdAndUpdate(
				_id,
				{ $push: { wishlist: productId } },
				{ new: true }
			);
			res.status(200).json({ message: "Product added to wishlist!", user });
		}
	} catch (error) {
		next(error);
	}
});

export const rating = asyncHandler(async (req, res, next) => {
	const { _id } = req.user;
	const { star, productId, comment } = req.body;
	try {
		const product = await Product.findById(productId);
		let alreadyRated = product.rating.find(
			(userId) => userId.postedBy.toString() === _id.toString()
		);

		if (alreadyRated) {
			const updateRating = await Product.updateOne(
				{
					rating: { $elemMatch: alreadyRated },
				},
				{
					$set: { "rating.$.star": star, "rating.$.comment": comment },
				},
				{ new: true }
			);
		} else {
			const rateProduct = await Product.findByIdAndUpdate(
				productId,
				{
					$push: {
						rating: {
							star,
							comment,
							postedBy: _id,
						},
					},
				},
				{ new: true }
			);
		}

		const getAllRatings = await Product.findById(productId);
		let totalRating = getAllRatings.rating.length;
		let totalRatingValue = getAllRatings.rating
			.map((item) => item.star)
			.reduce((prev, curr) => prev + curr, 0);
		let actualRating = Math.round(totalRatingValue / totalRating);
		let rating = await Product.findByIdAndUpdate(
			productId,
			{ totalRating: actualRating },
			{ new: true }
		);
		res.status(200).json({ message: "Rating updated!", rating });
	} catch (error) {
		next(error);
	}
});

export const uploadImages = asyncHandler(async (req, res) => {
	try {
		const uploader = (path) => cloudinaryUploadImg(path, "images");
		const urls = [];
		const files = req.files;
		for (const file of files) {
			const { path } = file;
			const newpath = await uploader(path);
			urls.push(newpath);
			console.log("newpath:", newpath);
			console.log("path:", path);
			// fs.unlinkSync(path);
		}
		const images = urls.map((file) => {
			return file;
		});
		res.json(images);
	} catch (error) {
		throw new Error(error);
	}
});
export const deleteImages = asyncHandler(async (req, res) => {
	const { id } = req.params;
	try {
		const deleted = cloudinaryDeleteImg(id, "images");
		if (!deleted) {
			return res.status(404).json({ message: "Image not found!" });
		}
		res.json({ message: "Image deleted successfully!" });
	} catch (error) {
		throw new Error(error);
	}
});

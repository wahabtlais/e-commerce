import express from "express";
import dotenv from "dotenv";
import dbConnect from "./config/dbConnect.js";
import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js";
import blogRouter from "./routes/blog.route.js";
import bodyParser from "body-parser";
import { errorHandler, notFound } from "./middlewares/errorHandler.js";
import cookieParser from "cookie-parser";
import productRouter from "./routes/product.route.js";
import morgan from "morgan";
import productCategoryRouter from "./routes/productCategory.route.js";
import blogCategoryRouter from "./routes/blogCategory.route.js";
import brandRouter from "./routes/brand.route.js";
import couponRouter from "./routes/coupon.route.js";
import cartRouter from "./routes/cart.route.js";

dotenv.config();
dbConnect();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(morgan("dev"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/blog", blogRouter);
app.use("/api/product-category", productCategoryRouter);
app.use("/api/blog-category", blogCategoryRouter);
app.use("/api/brand", brandRouter);
app.use("/api/coupon", couponRouter);
app.use("/api/cart", cartRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
	console.log(`Server is running at port ${PORT}`);
});

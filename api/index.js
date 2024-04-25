import express from "express";
import dotenv from "dotenv";
import dbConnect from "./config/dbConnect.js";
import authRouter from "./routes/auth.route.js";
import bodyParser from "body-parser";

dotenv.config();
dbConnect();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api/user", authRouter);

app.listen(PORT, () => {
	console.log(`Server is running at port ${PORT}`);
});
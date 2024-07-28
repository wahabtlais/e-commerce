import multer from "multer";
import sharp from "sharp";
import path from "path";
import fs from "fs-extra";
import { fileURLToPath } from "url";

// Create __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, path.join(__dirname, "../public/images/temp/"));
	},
	filename: function (req, file, cb) {
		const uniquesuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
		cb(null, file.fieldname + "-" + uniquesuffix + ".jpeg");
	},
});

const multerFilter = (req, file, cb) => {
	if (file.mimetype.startsWith("image")) {
		cb(null, true);
	} else {
		cb({ message: "Unsupported file format" }, false);
	}
};

export const upload = multer({
	storage: storage,
	fileFilter: multerFilter,
	limits: { fileSize: 1000000 },
});

export const productImgResize = async (req, res, next) => {
	if (!req.files) return next();
	await Promise.all(
		req.files.map(async (file) => {
			const outputPath = path.join(
				__dirname,
				`../public/images/products/${file.filename}`
			);
			await sharp(file.path)
				.resize(300, 300)
				.toFormat("jpeg")
				.jpeg({ quality: 90 })
				.toFile(outputPath);
			// fs.unlinkSync(outputPath);
			if (await fs.pathExists(outputPath)) {
				try {
					await fs.remove(outputPath);
					console.log(`Successfully deleted file at ${outputPath}`);
				} catch (err) {
					console.error(`Error deleting file at ${outputPath}:`, err);
				}
			} else {
				console.warn(`File at path ${outputPath} does not exist.`);
			}
		})
	);
	next();
};

export const blogImgResize = async (req, res, next) => {
	if (!req.files) return next();
	await Promise.all(
		req.files.map(async (file) => {
			await sharp(file.path)
				.resize(300, 300)
				.toFormat("jpeg")
				.jpeg({ quality: 90 })
				.toFile(`public/images/blogs/${file.filename}`); //C:\Users\pc\Desktop\Pending Projects\mern-e-commerce\api\public\images\products
			fs.unlinkSync(`public/images/blogs/${file.filename}`);
		})
	);
	next();
};

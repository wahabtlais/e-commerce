import express from "express";

import { verifyAdmin, verifyUser } from "../middlewares/verifyAccess.js";
import {
	addToCart,
	emptyCart,
	getUserCart,
} from "../controller/cart.controller.js";

const router = express.Router();

router.get("/", verifyUser, getUserCart);
router.post("/add-to-cart", verifyUser, addToCart);
router.delete("/empty-cart", verifyUser, emptyCart);

export default router;

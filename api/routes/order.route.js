import express from "express";

import { verifyAdmin, verifyUser } from "../middlewares/verifyAccess.js";
import {
	createOrder,
	getAllOrders,
	getOrders,
	updateOrdersStatus,
} from "../controller/order.controller.js";

const router = express.Router();

router.get("/", verifyUser, verifyAdmin, getAllOrders);
router.get("/get-orders", verifyUser, getOrders);
// router.post("/cart/apply-coupon", verifyUser, applyCoupon);
router.post("/create", verifyUser, createOrder);
router.post("/update-status/:id", verifyUser, verifyAdmin, updateOrdersStatus);
// router.delete("/delete/:id", verifyUser, verifyAdmin, deleteCoupon);

export default router;

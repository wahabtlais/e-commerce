import express from "express";
import {
	createCoupon,
	deleteCoupon,
	getAllCoupons,
	getCoupon,
	updateCoupon,
} from "../controller/coupon.controller.js";
import { verifyAdmin, verifyUser } from "../middlewares/verifyAccess.js";

const router = express.Router();

router.get("/", verifyUser, verifyAdmin, getAllCoupons);
router.get("/:id", verifyUser, verifyAdmin, getCoupon);
router.post("/create", verifyUser, verifyAdmin, createCoupon);
router.post("/update/:id", verifyUser, verifyAdmin, updateCoupon);
router.delete("/delete/:id", verifyUser, verifyAdmin, deleteCoupon);

export default router;

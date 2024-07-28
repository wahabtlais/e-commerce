import express from "express";

import { verifyAdmin, verifyUser } from "../middlewares/verifyAccess.js";
import { userCart } from "../controller/cart.controller.js";

const router = express.Router();

// router.get("/", verifyUser, verifyAdmin, getAllCoupons);
// router.get("/:id", verifyUser, verifyAdmin, getCoupon);
router.post("/", verifyUser, userCart);
// router.post("/update/:id", verifyUser, verifyAdmin, updateCoupon);
// router.delete("/delete/:id", verifyUser, verifyAdmin, deleteCoupon);

export default router;

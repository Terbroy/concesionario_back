const express = require("express");
const router = express.Router();
const authenticate = require("../middlewares/auth.middleware");
const { getBuyers, getBuyer, createBuyer, updateBuyer, deleteBuyer} = require("../controllers");


router.get("/buyers", authenticate, getBuyers);
router.get("/buyers/:id", authenticate, getBuyer);
router.patch("/buyers/:id", authenticate, updateBuyer);
router.delete("/buyers/:id", authenticate, deleteBuyer);

module.exports = router;
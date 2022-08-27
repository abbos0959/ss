const express = require("express");
const router = express.Router();
const productModel = require("../models/ProductModel");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchError");
const productController = require("../controller/ProductController");
const handler = require("express-async-handler");

router.get("/", productController.AllProduct);

router.get("/:id", productController.getProduct);

module.exports = router;

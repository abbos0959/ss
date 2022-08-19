const express = require("express");
const router = express.Router();
const productModel = require("../models/ProductModel");

const handler = require("express-async-handler");

router.get(
   "/",
   handler(async (req, res, next) => {
      const product = await productModel.find();
      res.status(200).json({
         product,
      });
   })
);

router.get(
   "/:id",
   handler(async (req, res, next) => {
      const productOne = await productModel.findById(req.params.id);
      if (productOne) {
         res.status(200).json({
            productOne,
         });
      }
      else{
        res.status(404).json({
            message:"product not found"
        })
      }
   })
);

module.exports = router;

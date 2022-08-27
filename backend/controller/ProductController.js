const productModel = require("../models/ProductModel");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchError");

const AllProduct = catchAsync(async (req, res, next) => {
   try {
      const product = await productModel.find();
      res.status(200).json({
         product
      })
   } catch (error) {
      res.status(400).json({
         message: error.message,
      });
   }
});

const getProduct = async (req, res, next) => {
   try {
      const data = await productModel.findById(req.params.id);

      if (!data) {
         return next(new AppError("bunday product mavjud emas", 404));
      }
      res.status(200).json({
         data,
      });
   } catch (error) {
      res.status(200).json({
         message: "bunday  product mavjud emas",
      });
   }
};

module.exports = { AllProduct, getProduct };

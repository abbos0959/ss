const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
// const AppError = require("../utils/appError");
// const catchErrorAsync = require("../utils/catchUtil");

//token bor yoki  yo'qligini tekshirish
exports.Isauthentication = async (req, res, next) => {
   const { token } = req.cookies;

   try {
      if (!token) {
         return res.status(401).json({
            message: "iltimos avval ro`yhatdan o`ting",
         });
      }
      const decodeData = jwt.verify(token, "secret");

      if (!decodeData) {
         return res.status(401).json({
            message: "bunday ID li user mavjud emas",
         });
      }
      req.user = await userModel.findById(decodeData.id);

      next();
   } catch (error) {
      res.status(404).json({
         message: "error isauthmiddleware",
      });
   }
};

// role bo`yicha kirish
exports.authoriseRoles = (...roles) => {
   return (req, res, next) => {
      if (!roles.includes(req.user.role)) {
         return res.status(404).json({ message: "bunday role mavjud emas" });
      }
      next();
   };
};

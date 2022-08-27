const AppError = require("../utils/appError");
const catchError = require("../utils/catchError");
const UserModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const createToken = require("../utils/CreateToken");

const jwt = require("jsonwebtoken");

const register = async (req, res, next) => {
   const { email, password, name } = req.body;
   try {
      const user = await UserModel.findOne({ email });

      if (user) {
         return res.status(404).json({
            message: "register error  bunday user allaqachon mavjud",
         });
      }
      const hashPassword = await bcrypt.hash(password, 10);
      const result = await UserModel.create({
         name,
         email,
         password: hashPassword,
      });
      createToken(result, 200, res);
   } catch (error) {
      res.status(404).json({
         message: "register hatoligi",
         error: error.message,
      });
   }
};

const Login = catchError(async (req, res, next) => {
   const { password, email } = req.body;

   try {
      const OldUser = await UserModel.findOne({ email });
      if (!OldUser) {
         return res.status(400).json({ message: "Parol yoki Email Xato" });
      }
      const comparePassword = await bcrypt.compare(password, OldUser.password);
      if (!comparePassword) {
         return res.status(400).json({
            message: "Parol yoki email Xatodir",
         });
      }
      const token = jwt.sign({ email: OldUser.email, id: OldUser._id }, "secret", {
         expiresIn: "1h",
      });
      console.log(req.cookies);
      res.status(201).json({ result: OldUser, token });
   } catch (error) {
      res.status(400).json({
         message: "nimadir xato ketdi",
      });
      console.log(error);
   }
});

const profile = async (req, res, next) => {
   console.log(req.user.id);
   try {
      const user = await UserModel.findById(req.user._id);

      if (user) {
         res.status(200).json({
            user,
         });
      }
   } catch (error) {
      res.status(404).json({
         message: "bunday user mavjud emas",
      });
   }
};
module.exports = { Login, register, profile };

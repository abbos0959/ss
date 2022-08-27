const express = require("express");

const isAuth=require("../middleware/Isauthentication")
const authController = require("../controller/userController");
const router = express.Router();

router.route("/login").post(authController.Login);
router.route("/register").post(authController.register);
router.route("/profile").get(isAuth.Isauthentication,authController.profile)

module.exports = router;

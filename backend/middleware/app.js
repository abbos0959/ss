const express = require("express");

const AppError = require("../utils/appError");
const apperrorController = require("../controller/apError");
const ProductRouter = require("../routers/productRouter");
const authRouter = require("../routers/userRouter");
const CookieParser = require("cookie-parser");

const app = express();
app.use(express.json());
app.use(CookieParser());

app.use("/api/product", ProductRouter);

app.use("/api/users", authRouter);

app.all("*", (req, res, next) => {
   next(new AppError("bunday page mavjud emas", 404));
});
// app.use(apperrorController);

module.exports = app;

const express = require("express");
const product = require("./data");
const dotenv = require("dotenv");
const colors = require("colors");
const ProductRouter = require("./routers/productRouter");
const errorHandler = require("./controller/errorController");
dotenv.config();
const DB = require("./connect/DB");
DB();

const app = express();
app.use(express.json());

app.use("/api/product", ProductRouter);

const PORT = process.env.PORT || 1000;
app.use(errorHandler);
app.listen(PORT, () => {
   console.log(`server    ${PORT} portda ishlamoqda`.yellow.bold);
});

//teDzzxP6Q730IalD

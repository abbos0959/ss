const dotenv = require("dotenv");
const colors = require("colors");

const app = require("./middleware/app");
dotenv.config();
const DB = require("./connect/DB");

DB();

const PORT = process.env.PORT || 1000;

app.listen(PORT, () => {
   console.log(`server    ${PORT} portda ishlamoqda`.yellow.bold);
});

//teDzzxP6Q730IalD

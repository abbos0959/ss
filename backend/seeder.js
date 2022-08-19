const mongoose = require("mongoose");
require("dotenv").config();
const users = require("./data/user");
const product = require("./data");
const UserModel = require("./models/userModel");
const productModel = require("./models/ProductModel");
const OrderModel = require("./models/orderModel");
const ProductModel = require("./models/ProductModel");

const DB = require("./connect/DB");
DB();
const color = require("colors");

const importData = async () => {
   try {
      await ProductModel.deleteMany();
      await UserModel.deleteMany();
      await OrderModel.deleteMany();

      const createUser = await UserModel.insertMany(users);

      const adminUser = createUser[0]._id;

      const SampleProduct = product.map((val) => {
         return { ...val, user: adminUser };
      });

      await ProductModel.insertMany(SampleProduct);

      console.log("data imported".green.inverse);
      process.exit();
   } catch (error) {
      console.error(`${error}`.red.inverse);
      process.exit(1);
   }
};

const DeleteData = async () => {
   try {
      await OrderModel.deleteMany();
      await ProductModel.deleteMany();
      await UserModel.deleteMany();

      console.log("data deleted".red.inverse);
      process.exit();
   } catch (error) {
      console.error(`${error}`.red.inverse);
      process.exit(1);
   }
};

if (process.argv[2] === "-d") {
   DeleteData();
} else {
   importData();
}

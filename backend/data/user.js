
const bcrypt=require("bcrypt")
const user = [
   { name: "Admin", email: "admin@gmail.com", password: bcrypt.hashSync("1234",10), isAdmin: true },
   { name: "user1", email: "user1@gmail.com", password: bcrypt.hashSync("1234",10) },
   { name: "user2", email: "user2@gmail.com", password: bcrypt.hashSync("1234",10) },
];

module.exports=user
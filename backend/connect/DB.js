const mongoose = require('mongoose');

const DB=async()=>{
    try {
        await mongoose.connect("mongodb+srv://Abbos:teDzzxP6Q730IalD@cluster0.icji5b5.mongodb.net/ECommerUd?retryWrites=true&w=majority")
        console.log("mongo ulandi".cyan.underline.bold);
    } catch (error) {
        console.log("mongo ulanmadi".red.bold);
        
    }
}
module.exports=DB
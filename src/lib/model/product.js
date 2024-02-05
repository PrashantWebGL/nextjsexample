const { default: mongoose } = require("mongoose");

const productModel = new mongoose.Schema({
    name:String,
    name:String,
    price:String,
    company:String,
    color:String,
    category:String
})

export const Product = mongoose.models.products || mongoose.model("products",productModel);
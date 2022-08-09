const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
    {
        title:String,
        price:mongoose.Types.Decimal128,
        description:String
    },
    {
        timestamps:true,
    }
)

const Product = mongoose.model("Product", ProductSchema)

module.exports = Product;
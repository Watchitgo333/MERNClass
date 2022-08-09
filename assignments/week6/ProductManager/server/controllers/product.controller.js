const Product = require('../models/product.model');

const newProductForm = (req, res) => {
    res.json({
        message:"Hello"
    })
}

const createProduct = (req, res) => {
    console.log("body---->", req.body)
    Product.create(req.body)
        .then((newProduct)=>{
            res.json(newProduct);
        })
        .catch((err)=>{
            console.log("Error in createProduct", err)
            req.status(201).json(err);
        });
}
const getProducts = (req, res) => {
    Product.find({})
    .then((products)=>{
        res.json(products);
    })
    .catch((err)=>{
        console.log("Error in getProducts", err)
        req.status(400).json(err);
    });
}

const getProductById = (req, res) => {
    Product.findById(req.params.id)
    .then((product)=>{
        res.json(product)
    })
    .catch((err)=>{
        console.log("Error in getProductById", err)
        req.status(400).json(err)
    });
}

const updateProduct = (req, res) => {
    Product.findByIdAndUpdate(req.params.id, req.body,{new:true})
    .then((updateProduct)=>{
        res.json(updateProduct)
    })
    .catch((err)=>{
        console.log("Error in updateProduct", err)
        req.status(400).json(err)
    })
}
const deleteProduct = (req, res) => {
    Product.findByIdAndDelete(req.params.id)
    .then((deleteProduct)=>{
        res.json(deleteProduct)
    })
    .catch((err)=>{
        console.log("Error in deleteProduct", err)
        req.status(400).json(err)
    })
}

module.exports = {
    newProductForm,
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct
}
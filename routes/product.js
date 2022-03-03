const Product = require('../models/Product');

const router = require('express').Router();

//Create new product
router.post('/', async(req,res) => {
    const newProduct = new Product(req.body.Product);

    try {
const savedProduct = await newProduct.save(); 
res.status(200).json(savedProduct)
    } catch(error) {
        console.log(error)
    }
})

// Get all products
router.get('/', async(req,res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products)
    }catch(error) {
        console.log(error)
    }
})


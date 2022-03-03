const Product = require('../models/Product');

const router = require('express').Router();

//Create new product
router.post('/', async(req,res) => {
    const newProduct = new Product(req.body);
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


// Get a single product

router.get('/find/:id', async (req,res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product)
    }catch(error) {
        console.log(error)
    }
})


// Delete a product
router.delete('/:id', async (req,res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json('Product Has Been Deleted')
    }
    catch(error) {
        console.log(error)
    }
});

// Update A Product
router.put('/:id', async(req,res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id,
            
            {
                $set: req.body,
            },
            {new: true}
            
            );
            res.status(200).json(updatedProduct);

    }catch(error) {
        console.log(error)
    }
})



module.exports = router;
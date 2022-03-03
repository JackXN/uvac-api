const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
    {
      productID: {type: Number, required: true},
        productName: {type: String, required: true},
        productDescription: {type: String, required: true},
        productCategory: {type: String, required: true},
        inStock: {type: Boolean, required: true},
        onSale: {type: Boolean, required: false},
        salePrice: {type: Number, required: false},
        type: {type: String, required: true},
        brand: {type:String, required: false},
        itemDimensions: {type: String, required: false},
        color: {type: String, required: false}

    }
)


module.exports = mongoose.model('Product', ProductSchema)
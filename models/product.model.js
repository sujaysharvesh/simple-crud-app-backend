const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema(
    {
        Name:{
            type: String,
            required: [true, 'Product name is required']
        },
        Quantity:{
            type: Number,
            required: true,
            default: 0
        },
        Price: {
            type: Number,
            required: true,
            default: 0
        },
        Image: {
            type: String,
            required: false
        }
    },
    {
        timestamps: true
    }
);

const Product = mongoose.model('product', ProductSchema);

module.exports = Product;
const mongoose = require('mongoose');
const { Schema } = mongoose;
// Schema
const CartSchema = new Schema({

    id: { type: Number, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    rating: { type: Number, required: true, },
    brand: { type: String, required: true, },
    category: { type: String, required: true },
    thumbnail: { type: String, required: true },
    images: [String]

});

exports.Cart = mongoose.model('Cart', CartSchema);
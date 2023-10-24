const mongoose = require('mongoose');
const model = require('../model/Cart_model')
const Cart = model.Cart;
exports.GET_All = async (req, res) => {
    try {

        const cart = await Cart.find();
        res.json(cart)
    }
    catch (err) {
        res.status(400).json(err)
    }
}

exports.Get_WITH_ID = async (req, res) => {
    const id = req.params.id;
    const cart = await Cart.findById(id);
    res.json(cart)
}

exports.POST = async (req, res) => {

    try {

        const cart = new Cart(req.body);
        Cart.save();
        res.json(cart)
    }
    catch (err) {
        res.json(err);
    }
}

exports.PUT = async (req, res) => {
    const id = req.params.id;
    try {

        const cart = await Cart.findOneAndReplace({ _id: id }, req.body, { new: true });
        res.status(201).json(cart);
    }
    catch (err) {
        res.status(400).json(err);
    }
}

exports.PATCH = async (req, res) => {
    const id = req.params.id;
    try {

        const cart = await Cart.findOneAndUpdate({ _id: id }, req.body, { new: true });
        res.status(201).json(cart);
    }
    catch (err) {
        res.status(400).json(err);
    }
}

exports.DELETE = async (req, res) => {
    const id = req.params.id;
    try {

        const cart = await Cart.findOneAndDelete({ _id: id });
        res.status(201).json(cart);
    }
    catch (err) {
        res.status(400).json(err);
    }
}


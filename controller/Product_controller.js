const mongoose = require('mongoose');
const model = require('../model/Product')
const Products = model.Products;
exports.GET_All = async (req, res) => {
    try {

        const products = await Products.find();
        res.json(products)
    }
    catch (err) {
        res.status(400).json(err)
    }
}

exports.Get_WITH_ID = async (req, res) => {
    const id = req.params.id;
    const products = await Products.findById(id);
    res.json(products)
}

exports.POST = async (req, res) => {
    const id = req.params.id;
    try {

        const products = new Products(req.body);
        Products.save();
        res.json(products)
    }
    catch (err) {
        res.json(err);
    }
}

exports.PUT = async (req, res) => {
    const id = req.params.id;
    try {

        const products = await Products.findOneAndReplace({ _id: id }, req.body, { new: true });
        res.status(201).json(products);
    }
    catch (err) {
        res.status(400).json(err);
    }
}

exports.PATCH = async (req, res) => {
    const id = req.params.id;
    try {

        const products = await Products.findOneAndUpdate({ _id: id }, req.body, { new: true });
        res.status(201).json(products);
    }
    catch (err) {
        res.status(400).json(err);
    }
}

exports.DELETE = async (req, res) => {
    const id = req.params.id;
    try {

        const products = await Products.findOneAndDelete({ _id: id });
        res.status(201).json(products);
    }
    catch (err) {
        res.status(400).json(err);
    }
}


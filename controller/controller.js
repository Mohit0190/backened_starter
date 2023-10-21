const mongoose = require('mongoose');
const model = require('../model/Model')
const Customer = model.Customer;
exports.GET_All = async (req, res) => {
    try {

        const customer = await Customer.find();
        res.json(customer)
    }
    catch (err) {
        res.status(400).json(err)
    }
}

exports.Get_WITH_ID = async (req, res) => {
    const id = req.params.id;
    const customer = await Customer.findById(id);
    res.json(customer)
}

exports.POST = async (req, res) => {
    const id = req.params.id;
    try{

        const customer = new Customer(req.body);
        customer.save();
        res.json(customer)
    }
    catch(err){
        res.json(err);
    }
}

exports.PUT = async (req, res) => {
    const id = req.params.id;
    try {

        const customer = await Customer.findOneAndReplace({ _id: id }, req.body, { new: true });
        res.status(201).json(customer);
    }
    catch (err) {
        res.status(400).json(err);
    }
}

exports.PATCH = async (req, res) => {
    const id = req.params.id;
    try {

        const customer = await Customer.findOneAndUpdate({ _id: id }, req.body, { new: true });
        res.status(201).json(customer);
    }
    catch (err) {
        res.status(400).json(err);
    }
}

exports.DELETE = async (req, res) => {
    const id = req.params.id;
    try {

        const customer = await Customer.findOneAndDelete({ _id: id });
        res.status(201).json(customer);
    }
    catch (err) {
        res.status(400).json(err);
    }
}


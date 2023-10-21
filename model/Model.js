const mongoose = require('mongoose');
const {Schema} = mongoose;
// Schema
const CustomerSchema = new Schema({

    name: String,
    age: Number,
    gender: String,
 
  });

  exports.Customer = mongoose.model('Customer', CustomerSchema);
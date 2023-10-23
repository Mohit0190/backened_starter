const mongoose = require('mongoose');
const {Schema} = mongoose;
// Schema
const CustomerSchema = new Schema({

    username: {type:String, required:true,unique:true},
    age: Number,
    gender: String,
    password:{type:String, required:true,unique:true},
 
  });

  exports.Customer = mongoose.model('customers', CustomerSchema);
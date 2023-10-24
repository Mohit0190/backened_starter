const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const model = require('../model/Customer_Model');
const Customer = model.Customer;
exports.register = async (req, res) => {
    const { username, password } = req.body;
    const user = await Customer.findOne({ username: username });
    if (user) {
       return res.json({ message: "user already registered" })
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newcustomer = new Customer({ username, password: hashedPassword })
    await newcustomer.save();
    res.json({ message: "user has been registered" });
}


exports.login = async(req,res)=>{
    const { username, password } = req.body;
    const user = await Customer.findOne({ username: username });
    if(!user){
       return res.json({message:"user does not exist"});
    }
    const isPasswordValid = await bcrypt.compare(password,user.password);
    if(!isPasswordValid){
       return  res.json({message:"Username or Password is incorrect"});
    }
    const token = jwt.sign({id:user._id},"secret");
    res.json({token, userId:user._id});

}
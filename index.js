const express = require('express');
const mongoose = require('mongoose');
const { product_Router } = require('./routes/Products');
const { customer_Router } = require('./routes/Customer');
require('dotenv').config();
const cors = require('cors');
const { cart_Router } = require('./routes/Cart');
const app = express();
// body Parser
app.use(express.json());

// foR frontened and backened
app.use(cors());

// Product Routes
app.use('/api/v1/products', product_Router);

// CustomerRoutes
app.use('/api/v1/auth', customer_Router);

// CartRoutes
app.use('/api/v1/cart', cart_Router);

// db Connection
main().catch(err => console.log(err));
async function main() {
     await mongoose.connect(process.env.MONGO_DATABASE_KEY);
     console.log('db connection established');
}


app.listen(8080);
const express = require('express');
const mongoose = require('mongoose');
const { router } = require('./routes/Routes');
require('dotenv').config();
const app = express();
// body Parser
app.use(express.json());

// Routes
app.use('/api/v1', router);

// db Connection
main().catch(err => console.log(err));
async function main() {
     await mongoose.connect(process.env.MONGO_DATABASE_KEY);
     console.log('db connection established');
}








app.listen(8080);
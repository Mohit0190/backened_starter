const express = require('express');
const { register, login } = require('../controller/Customer_controller');


const router = express.Router();
router.post('/register',register)
.post('/login',login)
exports.customer_Router = router;
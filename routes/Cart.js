const express = require('express');
const controller = require('../controller/Cart_controller');
const Router = express.Router();


Router.get('/',controller.GET_All)
    .get('/:id',controller.Get_WITH_ID)
    .post('/', controller.POST)
    .delete('/:id', controller.DELETE)
    .put('/:id', controller.PUT)
    .patch('/:id',controller.PATCH)

exports.cart_Router = Router;
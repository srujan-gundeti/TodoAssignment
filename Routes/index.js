const express = require('express');

const route = express.Router();
const todoController = require('../controller/todo');
const userController = require('../controller/user');

route.get('/todos',todoController.gettodos);
route.get('/user/:userId',userController.getUser);




module.exports = route;
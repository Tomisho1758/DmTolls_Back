const {Router}= require('express');
const monstersControllers = require('../Controlers/monsterController')
const monstersRouter= Router();

monstersRouter.post('/', monstersControllers.createMonster)
module.exports = monstersRouter
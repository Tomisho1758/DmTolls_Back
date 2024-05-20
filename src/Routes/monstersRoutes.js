const {Router}= require('express');
const monstersControllers = require('../Controlers/monsterController')
const monstersRouter= Router();

monstersRouter.post('/', monstersControllers.createMonster)
monstersRouter.get('/', monstersControllers.getMonsters)
monstersRouter.get('/search/:id', monstersControllers.getMonstersId)
module.exports = monstersRouter
const {Router}= require('express');
const monstersControllers = require('../Controlers/monsterController')
const monstersRouter= Router();

monstersRouter.post('/', monstersControllers.createMonster);
monstersRouter.get('/encounter/:encounterId', monstersControllers.getMonstersByEncounter);

module.exports = monstersRouter
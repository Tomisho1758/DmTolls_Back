const {Router}= require('express');
const playersControllers = require('../Controlers/playerControllers')
const playersRouter= Router();

playersRouter.post('/', playersControllers.createPlayer);
playersRouter.get('/group/:groupId', playersControllers.getPlayersByGroup);
module.exports = playersRouter
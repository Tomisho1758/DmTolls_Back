const {Router}= require('express');
const playersControllers = require('../Controlers/playerControllers')
const playersRouter= Router();

playersRouter.post('/',playersControllers.createPlayer)
module.exports = playersRouter
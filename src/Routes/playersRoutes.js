const {Router}= require('express');
const playersControllers = require('../Controlers/playerControllers')
const playersRouter= Router();

playersRouter.post('/',playersControllers.createPlayer)
playersRouter.get('/', playersControllers.getAll)
playersRouter.get('/search/:id', playersControllers.getById)
module.exports = playersRouter
const {Router}= require('express');
const playerGroupControllers = require('../Controlers/playerGroupControllers')
const playerGroupRouter= Router();

playerGroupRouter.post('/', playerGroupControllers.createPlayerGroup)
module.exports = playerGroupRouter;
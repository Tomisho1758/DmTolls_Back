const {Router}= require('express');
const playerGroupControllers = require('../Controllers/playerGroupControllers')
const playerGroupRouter= Router();

playerGroupRouter.post('/', playerGroupControllers.createPlayerGroup)
module.exports = playerGroupRouter;
const {Router}= require('express');
const playerGroupControllers = require('../Controllers/playerGroupControllers')
const playerGroupRouter= Router();

playerGroupRouter.post('/', playerGroupControllers.createPlayerGroup)
playerGroupRouter.get('/', playerGroupControllers.getAll)
playerGroupRouter.get('/search/:id', playerGroupControllers.getById)
module.exports = playerGroupRouter;
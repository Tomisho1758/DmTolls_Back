const {Router}= require('express');
const monstersControllers = require('../Controllers/monsterController');
const uploadController = require('../Controllers/uploadController');
const monstersRouter= Router();
const upload= require("../utils/middlewares/multer")

monstersRouter.post('/', upload.single('file') ,uploadController.imageUpload, monstersControllers.createMonster)
module.exports = monstersRouter
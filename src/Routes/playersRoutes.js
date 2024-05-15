const {Router}= require('express');
const playersControllers = require('../Controllers/playerControllers');
const uploadController = require('../Controllers/uploadController');
const playersRouter= Router();
const upload= require("../utils/middlewares/multer")
playersRouter.post('/', upload.single('file') ,uploadController.imageUpload ,playersControllers.createPlayer)
module.exports = playersRouter
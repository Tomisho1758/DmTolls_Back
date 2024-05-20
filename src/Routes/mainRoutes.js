const express = require('express');
const router = express.Router();
const playersRouter  = require("../Routes/playersRoutes");
const monstersRouter = require('./monstersRoutes');
const playerGroupRouter = require('./playerGroupRoutes');
const encounterRouter= require ('./encounterRoutes')

router.use("/playerGroup",playerGroupRouter);
router.use("/players", playersRouter);
router.use("/monsters", monstersRouter);
router.use('/encounter', encounterRouter);
module.exports = router;
const express = require('express');
const router = express.Router();
const playersRouter  = require("../Routes/playersRoutes");
const monstersRouter = require('./monstersRoutes');
const playerGroupRouter = require('./playerGroupRoutes');

router.use("/players", playersRouter);
router.use("/monsters", monstersRouter);
router.use("/playerGroup",playerGroupRouter);

module.exports = router;
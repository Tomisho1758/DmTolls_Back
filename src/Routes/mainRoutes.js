const express = require('express');
const router = express.Router();
const playersRouter  = require("../Routes/playersRoutes");
const monstersRouter = require('./monstersRoutes');


router.use("/players", playersRouter);
router.use("/monsters", monstersRouter)

module.exports = router;
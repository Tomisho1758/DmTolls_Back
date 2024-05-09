const express = require('express');
const router = express.Router();
const { Router } = require("express");
const playersRouter  = require("../Routes/playersRoutes");


router.use("/players", playersRouter);

module.exports = router;
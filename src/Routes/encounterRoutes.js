const {Router}= require('express');
const encounterControllers = require('../Controllers/encounterController')
const encounterRouter= Router();

encounterRouter.post('/', encounterControllers.createEncounter)
module.exports = encounterRouter
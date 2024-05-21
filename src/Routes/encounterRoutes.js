const {Router}= require('express');
const encounterControllers = require('../Controlers/encounterController')
const encounterRouter= Router();

encounterRouter.post('/', encounterControllers.createEncounter)
module.exports = encounterRouter
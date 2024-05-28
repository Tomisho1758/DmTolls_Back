const {Router}= require('express');

const encounterControllers = require('../Controllers/encounterController')
const encounterRouter= Router();

encounterRouter.post('/', encounterControllers.create);
encounterRouter.get('/', encounterControllers.getEncounters);




module.exports = encounterRouter

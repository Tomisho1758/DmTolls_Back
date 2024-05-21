// const{getAll, newEncounter} = require("../Services/encounterServices")

const encounterService = require("../Services/encounterServices");

const encounterController = {
  getEncounters: async (req, res) => {
    try {
      const encounters = await encounterService.getAll();
      res.status(200).json(encounters);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Failed to retrieve encounters" });
    }
  },
  createEncounter: async (req, res) => {
    try {
      const newEncounter = await encounterService.createEncounter(req.body);
      console.log(newEncounter.msg);
      res.status(200).json(newEncounter);
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: "Failed to create encounter" });
    }
  }
};

module.exports = encounterController;

  /*const monsterControllers = {
  createMonster: async (req, res) => {
    try {
      const newMonster= await MonsterService.createMonster(req.body);
      console.log(newMonster.msg);
      res.status(200).json(newMonster);
    } catch (error) {
      console.log(error);
      const newMonster = [];
      res.status(400).json(newMonster);
    }
  },
};
module.exports = monsterControllers;*/
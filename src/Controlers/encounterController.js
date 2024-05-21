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
  create: async (req, res) => {
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


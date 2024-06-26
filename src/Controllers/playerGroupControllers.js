const db = require("../Models/Players");
const PlayerGroupService = require("../Services/playerGroupServices");

const PlayerGroupControllers = {
  createPlayerGroup: async (req, res) => {
    try {
      const newPlayerGroup = await PlayerGroupService.createPlayerGroup(req.body);
      console.log(newPlayerGroup.msg);
      res.status(200).json(newPlayerGroup);
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: "Failed to create player group" });
    }
  },
  getPlayerGroup: async (req, res) => {
    try {
      const playerGroup = await PlayerGroupService.getPlayerGroup(req.params.id);
      res.status(200).json(playerGroup);
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: "Failed to retrieve player group" });
    }
  },
  getAll: async (req, res) => {
    try {
      const response= await PlayerGroupService.getAll();
      
      res.status(200).json(response);
    } catch (error) {
      console.log("Este es el error del controller",error);
      const response = [];
      res.status(400).json(response);
    }
  },
  getById: async (req, res) => {
    try {
      const { id } = req.params;
    const result = await PlayerGroupService.getById(id);
      res.status(200).json(result);
    } catch (error) {
      console.log("Este es el error del controller",error);
      const response = [];
      res.status(400).json(response);
    }
  }
};
module.exports = PlayerGroupControllers;
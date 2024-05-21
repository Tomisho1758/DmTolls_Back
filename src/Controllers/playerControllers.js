const db = require("../Models/Players");
const playerService = require("../Services/playersServices");

const playersControllers = {
  createPlayer: async (req, res) => {
    try {
      const newPlayer = await playerService.createPlayer(req.body);
      console.log(newPlayer.msg);
      res.status(200).json(newPlayer);
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: "Failed to create player" });
    }
  },
  getPlayersByGroup: async (req, res) => {
    try {
      const players = await playerService.getPlayersByGroup(req.params.groupId);
      res.status(200).json(players);
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: "Failed to retrieve players" });
    }
  },
    getAll: async (req, res) => {
      try {
        const response= await playerService.getAll();
        
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
      const result = await playerService.getById(id);
        res.status(200).json(result);
      } catch (error) {
        console.log("Este es el error del controller",error);
        const response = [];
        res.status(400).json(response);
      }
    }
  }

module.exports = playersControllers;

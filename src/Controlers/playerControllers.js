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
      const newPlayer = [];
      res.status(400).json(newPlayer);
    }
  },
};
module.exports = playersControllers;

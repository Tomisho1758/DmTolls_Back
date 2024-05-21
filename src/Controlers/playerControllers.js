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
  }
};

module.exports = playersControllers;

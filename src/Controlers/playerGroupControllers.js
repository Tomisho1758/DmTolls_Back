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
  }
};
module.exports = PlayerGroupControllers;

const db = require("../Models/Players");
const PlayerGroupService = require("../Services/playerGroupServices");

const PlayerGroupControllers = {
  createPlayerGroup: async (req, res) => {
    try {
      const newPlayerGroup= await PlayerGroupService.createPlayerGroup(req.body);
      console.log(newPlayerGroup.msg);
      res.status(200).json(newPlayerGroup);
    } catch (error) {
      console.log(error);
      const newPlayerGroup = [];
      res.status(400).json(newPlayerGroup);
    }
  },
};
module.exports = PlayerGroupControllers;
const { PlayerGroups, Players } = require("../DataBase/dataBase");

const PlayerGroupService = {
  createPlayerGroup: async (body) => {
    const { name } = body;

    const newPlayerGroup = await PlayerGroups.create({
      name
    });

    console.log('Player Group registered successfully:', newPlayerGroup);
    return newPlayerGroup;
  },

  getPlayerGroup: async (groupId) => {
    return await PlayerGroups.findByPk(groupId, {
      include: [Players]
    });
  }
};

module.exports = PlayerGroupService;

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
  },
  getAll: async () => {
    const allPG = await PlayerGroups.findAll();
    return allPG;
},

getById: async (id) => {
    const dbPGById = await PlayerGroups.findByPk(id);
    console.log(dbPGById);
    return dbPGById;
}
};


module.exports = PlayerGroupService;
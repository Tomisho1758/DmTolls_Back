const { Players } = require("../DataBase/dataBase");

const playerService = {
  createPlayer: async (body) => {
    const { name, hp, initiativeModifier, armor_class, level, playerGroupId } = body;

    const newPlayer = await Players.create({
      name,
      hp,
      initiativeModifier,
      armor_class,
      level,
      playerGroupId
    });

    console.log('Player registered successfully:', newPlayer);
    return newPlayer;
  },

  getPlayersByGroup: async (groupId) => {
    return await Players.findAll({
      where: { playerGroupId: groupId }
    });
  },
  getAll: async () => {
    const allPlayers = await Players.findAll();
    return allPlayers;
},

getById: async (id) => {
    const dbPlayersById = await Players.findByPk(id);
    console.log(dbPlayersById);
    return dbPlayersById;
}
};

module.exports = playerService;

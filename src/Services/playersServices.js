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
  }
};

module.exports = playerService;
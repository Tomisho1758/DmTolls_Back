const { Players } = require("../DataBase/dataBase");

const playerService = {
    createPlayer: async (body) => {
        const { name, hp, initiativeModifier, armor_class, level } = body;

        const newPlayer = await Players.create({
            name,
            hp,
            initiativeModifier,
            armor_class,
            level
        });

        console.log('Player registered successfully:', newPlayer);
        return newPlayer;
    },

    getAll: async () => {
        const allPlayers = await Players.findAll();
        return allPlayers;
    },

    getPlayerById: async (id) => {
        const dbPlayersById = await Players.findByPk(id);
        console.log(dbPlayersById);
        return dbPlayersById;
    }
};

module.exports = playerService;

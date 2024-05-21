const { Encounters, Monsters } = require("../DataBase/dataBase");

const encounterService = {
  createEncounter: async (body) => {
    const { name, createdAt, playerGroupId } = body;

    const newEncounter = await Encounters.create({
      name,
      createdAt,
      playerGroupId
    });

    console.log('Encounter registered successfully:', newEncounter);
    return newEncounter;
  },

  getAll: async () => {
    return await Encounters.findAll({
      include: [Monsters]
    });
  }
};

module.exports = encounterService;

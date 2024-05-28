const { Encounters, Monsters } = require("../DataBase/dataBase");

const EncounterService = {
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

  allEncounters: async() =>{
    const allEncounters = await Encounters.findAll();
    return allEncounters
    } 
};

module.exports = EncounterService;

const { Monsters } = require("../DataBase/dataBase");

const MonsterService = {
  createMonster: async (body) => {
    const { name, hp, initiativeModifier, armor_class, level, alignment, encounterId } = body;

    const newMonster = await Monsters.create({
      name,
      hp,
      initiativeModifier,
      armor_class,
      level,
      alignment,
      encounterId
    });

    console.log('Monster registered successfully:', newMonster);
    return newMonster;
  },

  getMonstersByEncounter: async (encounterId) => {
    return await Monsters.findAll({
      where: { encounterId }
    });
  }
};

module.exports = MonsterService;
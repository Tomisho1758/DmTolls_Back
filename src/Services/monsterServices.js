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
  },
  allMonstersDb: async() =>{
    const allMonsters = await Monsters.findAll();
    return allMonsters
    } ,
    getMonsterById : async (id) => {
           {
            const dbMonstersById = await Monsters.findByPk(id);
           console.log(dbMonstersById) 
           return dbMonstersById
            
}
}
};

module.exports = MonsterService;

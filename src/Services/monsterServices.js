const {Monsters} = require ("../DataBase/dataBase")

const MonsterService = {
    createMonster: async(body) =>{
      
      const{name,hp,initiativeModifier,armor_class,level,alignment}= body
     
            const newMonster = await Monsters.create({
                  
                  name,
                  hp,
                  initiativeModifier,
                  armor_class,
                  level,
                  alignment
                                 
            });

            console.log('Player registered successfully:', newMonster);
            return newMonster; 
     
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
}
module.exports = MonsterService
const {Monster} = require ("../DataBase/dataBase")

const MonsterService = {
    createMonster: async(body) =>{
      
      const{name,hp,initiativeModifier,armor_class,level,alignment}= body
     
            const newMonster = await Monster.create({
                  
                  name,
                  hp,
                  initiativeModifier,
                  armor_class,
                  level,
                  alignment
                                 
            });

            console.log('Player registered successfully:', newMonster);
            return newMonster; 
        
    }
}
module.exports = MonsterService
const {Players} = require ("../DataBase/dataBase")

const playerService = {
    createPlayer: async(body) =>{
      
      const{name,hp,initiativeModifier,armor_class,level}= body
     
            const newPlayer = await Players.create({                  
                  name,
                  hp,
                  initiativeModifier,
                  armor_class,
                  level               
            });

            console.log('Player registered successfully:', newPlayer);
            return newPlayer; 
        
    }
}
module.exports = playerService
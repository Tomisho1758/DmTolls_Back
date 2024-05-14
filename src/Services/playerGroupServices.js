const {PlayerGroup} = require ("../DataBase/dataBase")

const PlayerGroupService= {
    createPlayerGroup: async(body) =>{
      
      const{name}= body
     
            const newPlayerGroup = await PlayerGroup.create({
                  
                  name
                 
            });

            console.log('Player registered successfully:', newPlayerGroup);
            return newPlayerGroup; 
        
    }
}
module.exports = PlayerGroupService;
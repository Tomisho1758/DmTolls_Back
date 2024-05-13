const {PlayerGroups} = require ("../DataBase/dataBase")

const PlayerGroupService= {
    createPlayerGroup: async(body) =>{
      
      const{name}= body
     
            const newPlayerGroup = await PlayerGroups.create({
                  
                  name
                 
            });

            console.log('Player registered successfully:', newPlayerGroup);
            return newPlayerGroup; 
        
    }
}
module.exports = PlayerGroupService;
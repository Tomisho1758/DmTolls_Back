const{getAll, createEncounter} = require("../Services/encounterServices")


const encounterController = {
    
    getEncounters : async (req, res)=>{
        try {
         const encounters = await getAll()
         res.status(200).json(encounters)
        } catch (error) {
         const encounters =[]
         res.status(500).json(encounters)
        }
    },
    createEncounter : async (req, res)=>{
      try {
          const createdEncounter = await createEncounter(req)
          console.log("req.body:",req.body)
         res.status(200).json(createdEncounter)
      } catch (error) {
          const createdEncounter=[]
        //   console.log(error.message)
          res.status(500).json(createdEncounter)
          
      }
  }

 }
 module.exports= encounterController;
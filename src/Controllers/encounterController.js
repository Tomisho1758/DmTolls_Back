const{getAll, newEncounter} = require("../Services/encounterServices")


 export const encounterrController = {
    
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
          const newEncounter = await newEncounter(req)
         res.status(200).json(newEncounter)
      } catch (error) {
          const newEncounter=[]
          res.status(200).json(newEncounter)
      }
  }

 }
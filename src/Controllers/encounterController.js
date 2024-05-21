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
    create: async (req, res) => {
        try {
          const newEncounter = await encounterService.createEncounter(req.body);
          console.log(newEncounter.msg);
          res.status(200).json(newEncounter);
        } catch (error) {
          console.log(error);
          res.status(400).json({ error: "Failed to create encounter" });
        }
      }

 }
 module.exports= encounterController;
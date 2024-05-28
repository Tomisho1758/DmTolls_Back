const EncounterService = require("../Services/encounterServices")


const encounterController = {
    
    getEncounters: async (req, res) => {
      try {
        const response= await EncounterService.allEncounters();
        
        res.status(200).json(response);
      } catch (error) {
        console.log("Este es el error del controller",error);
        const response = [];
        res.status(400).json(response);
      }
    },
    create: async (req, res) => {
        try {
          const newEncounter = await EncounterService.createEncounter(req.body);
          console.log(newEncounter.msg);
          res.status(200).json(newEncounter);
        } catch (error) {
          console.log(error);
          res.status(400).json({ error: "Failed to create encounter" });
        }
      }

 }
 module.exports= encounterController;
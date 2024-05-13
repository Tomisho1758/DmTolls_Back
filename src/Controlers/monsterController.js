const db = require("../Models/Players");
const MonsterService = require("../Services/monsterServices");

const monsterControllers = {
  createMonster: async (req, res) => {
    try {
      const newMonster= await MonsterService.createMonster(req.body);
      console.log(newMonster.msg);
      res.status(200).json(newMonster);
    } catch (error) {
      console.log(error);
      const newMonster = [];
      res.status(400).json(newMonster);
    }
  },
};
module.exports = monsterControllers;
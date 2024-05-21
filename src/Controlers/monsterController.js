const MonsterService = require("../Services/monsterServices");

const monsterControllers = {
  createMonster: async (req, res) => {
    try {
      const newMonster = await MonsterService.createMonster(req.body);
      console.log(newMonster.msg);
      res.status(200).json(newMonster);
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: "Failed to create monster" });
    }
  },
  getMonstersByEncounter: async (req, res) => {
    try {
      const monsters = await MonsterService.getMonstersByEncounter(req.params.encounterId);
      res.status(200).json(monsters);
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: "Failed to retrieve monsters" });
    }
  }
};

module.exports = monsterControllers;
const { response } = require("express");
const db = require("../Models/Players");
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
  },
  getMonsters: async (req, res) => {
    try {
      const response= await MonsterService.allMonstersDb();
      
      res.status(200).json(response);
    } catch (error) {
      console.log("Este es el error del controller",error);
      const response = [];
      res.status(400).json(response);
    }
  },
  getMonstersId: async (req, res) => {
    try {
      const { id } = req.params;
    const result = await MonsterService.getMonsterById(id);
      res.status(200).json(result);
    } catch (error) {
      console.log("Este es el error del controller",error);
      const response = [];
      res.status(400).json(response);
    }
  },
};
module.exports = monsterControllers;
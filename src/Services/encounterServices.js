const {
  Encounter,
  Players,
  PlayerGroup,
  Monster,
} = require("../DataBase/dataBase");


const getAll = async () => {
  const encounters = await Encounter.findAll({
    include: [
      {
        model: PlayerGroup,
        attributes: ["name"],
      },
      {
        model: Players,
        attributes: ["name"],
      },
      {
        model: Monster,
        attributes: ["name"],
      },
    ],
  });

  return encounters;
};

const newEncounter = async(req)=>{
const {playerGroup, monster} = req.body

    const encounter = await Encounter.create({playerGroup, monster})

    return encounter
}


module.exports = {
  getAll,
  newEncounter
};

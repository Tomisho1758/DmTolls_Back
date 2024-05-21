const {
  Encounters,
  Players,
  PlayerGroups,
  Monsters,
} = require("../DataBase/dataBase");


const getAll = async () => {
  const encounters = await Encounters.findAll({
    include: [
      {
        model: PlayerGroups,
        attributes: ["name"],
      },
      {
        model: Players,
        attributes: ["name"],
      },
      {
        model: Monsters,
        attributes: ["name"],
      },
    ],
  });

  return encounters;
};

const createEncounter = async (name, createdAt, monsterId, groupId) => {
  try {
    // Verifica si monsterId y groupId son arrays, si no, conviértelos en arrays
    const monsterIds = Array.isArray(monsterId) ? monsterId : [monsterId];
    const groupIds = Array.isArray(groupId) ? groupId : [groupId];

    // Busca los monstruos y grupos de jugadores existentes en la base de datos
    const existingMonsters = await Monsters.findAll({ where: { id: monsterIds } });
    const existingGroups = await PlayerGroups.findAll({ where: { id: groupIds } });
console.log("ESte es el log del service linea 39:",existingGroups, existingMonsters)
    // Verifica si todos los monstruos y grupos de jugadores existen en la base de datos
    const monsterIdsFound = existingMonsters.map((monster) => monster.id);
    const groupIdsFound = existingGroups.map((group) => group.id);

    const monstersNotFound = monsterIds.filter((id) => !monsterIdsFound.includes(id));
    const groupsNotFound = groupIds.filter((id) => !groupIdsFound.includes(id));

    // Si algún monstruo o grupo de jugadores no se encontró, lanza un error
    if (monstersNotFound.length > 0 || groupsNotFound.length > 0) {
      throw new Error(`Monsters with IDs [${monstersNotFound.join(', ')}] or groups with IDs [${groupsNotFound.join(', ')}] not found`);
      
    }
console.log("monstruos y grupos no encontrados:", monstersNotFound,groupsNotFound)
    // Crea el encuentro en la base de datos
    const newEncounter = await Encounters.create({
      name,
      createdAt: new Date(createdAt),
    });

    // Asocia los monstruos y grupos de jugadores al nuevo encuentro
    await newEncounter.addMonsters(existingMonsters);
    await newEncounter.addPlayerGroups(existingGroups);

    return {
      message: "Encounter successfully created",
      newEncounter: newEncounter,
    };
  } catch (error) {
    console.error("Error in createEncounter:", error);
    throw error;
  }
};



module.exports = {
  getAll,
  createEncounter
};

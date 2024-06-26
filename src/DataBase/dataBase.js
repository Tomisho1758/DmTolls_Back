require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  {
    logging: false,
    host: DB_HOST,
    dialect: "postgres",
    ssl: true,
    dialectOptions: {
      ssl: {
        require: true,
      },
    },
  }
);
const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, "../Models"))
  .filter((file) => file.indexOf(".") !== 0 && file.slice(-3) === ".js")
  .forEach((file) => {
    const modelDefiner = require(path.join(__dirname, "../Models", file));
    modelDefiners.push(modelDefiner);
  });

modelDefiners.forEach((model) => model(sequelize));

const { Players, PlayerGroups, Monsters, Encounters } = sequelize.models;

Encounters.belongsTo(PlayerGroups, { foreignKey: 'playerGroupId' });
PlayerGroups.hasMany(Players, { foreignKey: 'playerGroupId' });
Encounters.hasMany(Monsters, { foreignKey: 'encounterId' });
Monsters.belongsTo(Encounters, { foreignKey: 'encounterId' }); // Relación inversa para comodidad

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};

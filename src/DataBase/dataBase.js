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

const { Players, PlayerGroups, Monsters, Encounters, Upload } = sequelize.models;


Players.belongsToMany(PlayerGroups, { through: "party", timestamps: false });
Encounters.belongsTo(PlayerGroups, {through: "encounter_group", timestamps:false})
Monsters.belongsToMany(Encounters,{through: "encounter_monster", timestamps:false})
Upload.belongsTo(Players, {foreignKey: "avatar", timestamps:false});
Upload.belongsTo(Monsters, {foreignKey: "avatar", timestamps:false});

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};

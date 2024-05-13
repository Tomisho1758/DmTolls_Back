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

const { Players, PlayerGroup, Monster, Encounter } = sequelize.models;


Players.belongsToMany(PlayerGroup, { through: "party", timestamps: false });
Encounter.belongsTo(PlayerGroup, {through: "encounter_group", timestamps:false})
Monster.belongsToMany(Encounter,{through: "encounter_monster", timestamps:false})

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};

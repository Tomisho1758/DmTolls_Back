require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
  logging: false,
  host: DB_HOST,
  dialect: "postgres",
  ssl: true,
  dialectOptions: {
    ssl: {
     require: true,
    }, 
  },
});
const basename = path.basename(__filename);

const modelDefiners = [];

// Read the files from the Models directory
fs.readdirSync(path.join(__dirname, '../Models'))
   .filter(
      (file) =>
         file.indexOf('.') !== 0 &&  // Exclude files starting with '.'
         file.slice(-3) === '.js'    // Include only '.js' files
   )
   .forEach((file) => {
      // Require each model file and push its export to modelDefiners
      const modelDefiner = require(path.join(__dirname, '../Models', file));
      modelDefiners.push(modelDefiner);
   });

// Now, loop through the modelDefiners array and call each model function with sequelize
modelDefiners.forEach((model) => model(sequelize));

// Capitalize model names if needed (you already have this part)

// Export your models and sequelize instance
module.exports = {
   ...sequelize.models,
   conn: sequelize,
};
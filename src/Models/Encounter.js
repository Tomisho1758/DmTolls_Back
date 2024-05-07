const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('encounter', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false 
    },
    createdAt:{
      type: DataTypes.DATE,
      allowNull: false  
    }

   
  }, { timestamps: false });
};
const { DataTypes } = require('sequelize');
const PlayerGroup = require('./PlayerGroup');

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
    },
    monsterId: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    groupId: {
      type: DataTypes.BIGINT,
      allowNull: false
    }


   
  }, { timestamps: false });

  
};
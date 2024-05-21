const { DataTypes } = require('sequelize');
const PlayerGroup = require('./PlayerGroup');

module.exports = (sequelize) => {
   sequelize.define('Encounters', {
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
    playerGroupId: {
      type: DataTypes.UUID,
      references: {
        model: 'PlayerGroups',
        key: 'id'
      }
    }


   
  }, { timestamps: false },


);

  
};
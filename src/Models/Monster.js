const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('monster', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    

    name: {
      type: DataTypes.STRING,
      allowNull: false 
    },

    hp: {
      type: DataTypes.INTEGER,
      allowNull: false 
    },
    initiativeModifier: {
      type: DataTypes.INTEGER,
      allowNull: false 
    },
    armor_class: {
      type: DataTypes.INTEGER,
      allowNull: false 
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false 
    },

    alignament:{
        type: DataTypes.BOOLEAN,
      allowNull: false 
    },



  }, { timestamps: false });
};



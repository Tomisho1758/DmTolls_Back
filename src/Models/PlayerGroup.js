const { DataTypes } = require('sequelize');
const { FOREIGNKEYS } = require('sequelize/lib/query-types');

module.exports = (sequelize) => {

  sequelize.define('PlayerGroup', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    

    name: {
      type: DataTypes.STRING,
      allowNull: false 
    },
    


  }, { timestamps: false });


};

 


const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {

  sequelize.define('Upload', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    

    url: {
      type: DataTypes.STRING,
      allowNull: false 
    },
    


  }, { timestamps: false });


};
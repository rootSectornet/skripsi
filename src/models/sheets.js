'use strict';
module.exports = (sequelize, DataTypes) => {
  const sheets = sequelize.define('sheets', {
    code: DataTypes.STRING,
    name: DataTypes.STRING,
    model: DataTypes.STRING
  }, {});
  sheets.associate = function(models) {
    // associations can be defined here
  };
  return sheets;
};
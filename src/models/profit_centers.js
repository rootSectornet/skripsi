'use strict';
module.exports = (sequelize, DataTypes) => {
  const roles = sequelize.define('profit_centers', {
    code: DataTypes.STRING,
    type: DataTypes.STRING,
    name: DataTypes.STRING
  }, {});
  roles.associate = function(models) {
    // associations can be defined here
  };
  return roles;
};
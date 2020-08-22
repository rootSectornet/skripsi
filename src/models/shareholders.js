'use strict';
module.exports = (sequelize, DataTypes) => {
  const shareholders = sequelize.define('shareholders', {
    user_id: DataTypes.INTEGER,
    perusahaan_id: DataTypes.INTEGER,
    equity_date: DataTypes.DATEONLY
  }, {});
  shareholders.associate = function(models) {
    // associations can be defined here
    shareholders.hasMany(models.shareholders_details,{
      foreignKey:'equity_id'
    })
  };
  return shareholders;
};
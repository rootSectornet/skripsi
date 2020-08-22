'use strict';
module.exports = (sequelize, DataTypes) => {
  const shareholders_details = sequelize.define('shareholders_details', {
    equity_id: DataTypes.INTEGER,
    equity_item: DataTypes.STRING,
    equity_value: DataTypes.STRING
  }, {});
  shareholders_details.associate = function(models) {
    // associations can be defined here
  };
  return shareholders_details;
};
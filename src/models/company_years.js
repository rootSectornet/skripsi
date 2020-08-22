'use strict';
module.exports = (sequelize, DataTypes) => {
  const company_years = sequelize.define('company_years', {
    year: DataTypes.INTEGER,
    count: DataTypes.INTEGER
  }, {});
  company_years.associate = function(models) {
    // associations can be defined here
  };
  return company_years;
};
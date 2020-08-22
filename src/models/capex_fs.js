'use strict';
module.exports = (sequelize, DataTypes) => {
  const capex_fs = sequelize.define('capex_fs', {
    user_id: DataTypes.INTEGER,
    company_id: DataTypes.INTEGER,
    capex_config_id: DataTypes.INTEGER,
    type: DataTypes.STRING,
    label: DataTypes.STRING,
    slug: DataTypes.STRING,
    year: DataTypes.STRING,
    sub: DataTypes.STRING,
    sheet: DataTypes.STRING,
    value: DataTypes.INTEGER,
    model: DataTypes.STRING
  }, {});
  capex_fs.associate = function(models) {
    // associations can be defined here
    
  };
  return capex_fs;
};
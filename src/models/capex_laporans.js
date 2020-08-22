'use strict';
module.exports = (sequelize, DataTypes) => {
  const capex_laporans = sequelize.define('capex_laporans', {
    user_id: DataTypes.INTEGER,
    company_id: DataTypes.INTEGER,
    capex_config_id: DataTypes.INTEGER,
    type: DataTypes.STRING,
    label: DataTypes.STRING,
    slug: DataTypes.STRING,
    year: DataTypes.STRING,
    fs: DataTypes.INTEGER,
    proyeksi_rkap: DataTypes.INTEGER,
    month: DataTypes.STRING,
    sub: DataTypes.STRING,
    value: DataTypes.INTEGER
  }, {});
  capex_laporans.associate = function(models) {
    // associations can be defined here
  };
  return capex_laporans;
};
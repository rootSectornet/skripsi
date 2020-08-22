'use strict';
module.exports = (sequelize, DataTypes) => {
  const setoran_modals = sequelize.define('setoran_modals', {
    company_share_id: DataTypes.INTEGER,
    rencana: DataTypes.DOUBLE,
    realisasi: DataTypes.DOUBLE,
    proyeksi: DataTypes.DOUBLE,
    month_year: DataTypes.DATE
  }, {});
  setoran_modals.associate = function(models) {
    // associations can be defined here
    setoran_modals.belongsTo(models.company_shares, {
      foreignKey: 'company_share_id',
    });
  };
  return setoran_modals;
};
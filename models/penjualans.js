'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class penjualans extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      penjualans.belongsTo(models.warehouses,{
        foreignKey: 'id_warehouse'
      });
      penjualans.hasMany(models.detailpenjualans,{
        foreignKey: 'id_penjualan'
      })
    }
  };
  penjualans.init({
    id_warehouse: DataTypes.INTEGER,
    tanggal: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'penjualans',
  });
  return penjualans;
};
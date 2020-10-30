'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class detailpenjualans extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      detailpenjualans.belongsTo(models.penjualans,{
        foreignKey: 'id_penjualan'
      });
      detailpenjualans.belongsTo(models.products,{
        foreignKey: 'id_product'
      });
    }
  };
  detailpenjualans.init({
    id_penjualan: DataTypes.INTEGER,
    id_product: DataTypes.INTEGER,
    jumlah: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'detailpenjualans',
  });
  return detailpenjualans;
};
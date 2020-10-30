'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class detailpembelians extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      detailpembelians.belongsTo(models.pembelians,{
        foreignKey: 'id_pembelian'
      });
      detailpembelians.belongsTo(models.products,{
        foreignKey: 'id_product'
      });
    }
  };
  detailpembelians.init({
    id_pembelian: DataTypes.INTEGER,
    id_product: DataTypes.INTEGER,
    jumlah: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'detailpembelians',
  });
  return detailpembelians;
};
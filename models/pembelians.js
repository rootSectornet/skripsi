'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pembelians extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      pembelians.belongsTo(models.warehouses,{
        foreignKey: 'id_warehouse'
      });
      pembelians.hasMany(models.detailpembelians,{
        foreignKey: 'id_pembelian'
      })
    }
  };
  pembelians.init({
    id_warehouse: DataTypes.INTEGER,
    tanggal: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'pembelians',
  });
  return pembelians;
};
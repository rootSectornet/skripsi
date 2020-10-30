'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class warehouses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      warehouses.hasMany(models.users,{
        foreignKey: 'id_warehouse'
      })
      warehouses.hasMany(models.products,{
        foreignKey: 'id_warehouse'
      })
      warehouses.hasMany(models.penjualans,{
        foreignKey: 'id_warehouse'
      })
      warehouses.hasMany(models.pembelians,{
        foreignKey: 'id_warehouse'
      })
    }
  };
  warehouses.init({
    name: DataTypes.STRING,
    alamat: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'warehouses',
  });
  return warehouses;
};
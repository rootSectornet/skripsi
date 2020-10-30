'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      products.belongsTo(models.warehouses,{
        foreignKey: 'id_warehouse'
      });
      products.hasMany(models.detailpenjualans,{
        foreignKey: 'id_product'
      })
      products.hasMany(models.detailpembelians,{
        foreignKey: 'id_product'
      })
    }
  };
  products.init({
    nama: DataTypes.STRING,
    id_warehouse: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'products',
  });
  return products;
};
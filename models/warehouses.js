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
      warehouses.hasMany(models.users, {
        foreignKey: 'warehouse_id',
        sourceKey: 'id'
      });

    }
  };
  warehouses.init({
    code: DataTypes.STRING,
    alamat: DataTypes.STRING,
    status: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'warehouses',
  });
  return warehouses;
};
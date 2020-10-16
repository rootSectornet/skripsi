'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class stocks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      stocks.belongsTo(models.warehouses, {
        foreignKey: 'warehouse_id',
      });  
    }
  };
  stocks.init({
    warehouse_id: DataTypes.INTEGER,
    stock: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'stocks',
  });
  return stocks;
};
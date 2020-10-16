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
      penjualans.belongsTo(models.stocks, {
        foreignKey: 'stock_id',
      })
    }
  };
  penjualans.init({
    no_faktur: DataTypes.STRING,
    stock_id: DataTypes.INTEGER,
    qty: DataTypes.INTEGER,
    harga: DataTypes.INTEGER,
    total: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'penjualans',
  });
  return penjualans;
};
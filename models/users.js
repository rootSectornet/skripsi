'use strict';
const bcrypt = require('bcrypt');

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      users.belongsTo(models.warehouses, {
        foreignKey: 'warehouse_id',
      });  
    }
  };
  users.init({
    username: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: {
      type: DataTypes.STRING, 
      set(value) {
        this.setDataValue('password', bcrypt.hashSync(value, 10));
      }
    },
    warehouse_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'users',
  });
  
  users.prototype.comparePassword = function (passw, cb) {
    bcrypt.compare(passw, this.password, function (err, isMatch) {
        if (err) {
          return cb(err);
        }
        cb(null, isMatch); 
    });
  };

  return users;
};
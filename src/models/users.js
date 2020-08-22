'use strict';

const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  var users = sequelize.define('users', {
    company_id: DataTypes.INTEGER,
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: {
      type: DataTypes.STRING, 
      set(value) {
        this.setDataValue('password', bcrypt.hashSync(value, 10));
      }
    }
  },
  /*{ 
  getterMethods: {
    name: function() {
      // a virtual to compute total price from unitPrice and quantity
      return 'xxxxxxxxx'
      }
    }
  },*/
  { 
    hooks: {
      /*beforeValidate: function(user, options) {
        return user.name = 'happy'
      },*/
      afterValidate: function(user, options) {
        var date = new Date();
        var current_hour = date.getMinutes() + date.getSeconds();
        return user.username = current_hour
      }
    }
  },
  {
    underscored: true,
    timestamps: true,
  });

  users.prototype.comparePassword = function (passw, cb) {
    bcrypt.compare(passw, this.password, function (err, isMatch) {
        if (err) {
          return cb(err);
        }
        cb(null, isMatch);
    });
  };

  users.associate = function(models) {
    // associations can be defined here
  };
  return users;
};
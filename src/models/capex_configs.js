'use strict'; 
const isFieldUnique = require('@helpers/isFieldUnique');
module.exports = (sequelize, DataTypes) => {
  const capex_configs = sequelize.define('capex_configs', {
    company_id: { 
      type: DataTypes.INTEGER,
      unique: true,
      validate: {
        isEven: function (value) {
          return isFieldUnique('capex_configs', 'company_id', value, 'Your account Already config');
        }
      }
    },
    mulai_konsesi: DataTypes.INTEGER,
    masa_konsesi: DataTypes.INTEGER,
    spmk:DataTypes.INTEGER,
    sheet: DataTypes.STRING,
    equity: DataTypes.INTEGER,
    loan: DataTypes.INTEGER
  },{});
  capex_configs.associate = function(models) {
    // associations can be defined here
    capex_configs.hasMany(models.capex_fs, {
      foreignKey: 'capex_config_id',
      sourceKey: 'id'
    });
    capex_configs.hasMany(models.capex_laporans, {
      foreignKey: 'capex_config_id',
      sourceKey: 'id'
    });
  };

  // capex_configs.beforeCreate(function(user, options) {  
  //  // throw new Error("You can't grant this user an access level above 10!") 
  // })

  return capex_configs;
};
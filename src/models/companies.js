'use strict';
module.exports = (sequelize, DataTypes) => {
  const companies = sequelize.define('companies', {
    category_id: DataTypes.INTEGER, 
    year: DataTypes.STRING,
    code: DataTypes.STRING,
    name: DataTypes.STRING, 
    npwp: DataTypes.STRING,
    logo: DataTypes.STRING,
    image: DataTypes.STRING,
    date_of_start: DataTypes.DATE,
    address: DataTypes.TEXT
  }, {});
  companies.associate = function(models) {
    // associations can be defined here
    companies.hasMany(models.users, {
      foreignKey: 'company_id',
      sourceKey: 'id'
    });
    companies.hasMany(models.company_shares, {
      foreignKey: 'company_id',
      sourceKey: 'id'
    });
    
  };

  return companies;
};
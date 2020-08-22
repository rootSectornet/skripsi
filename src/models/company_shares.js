'use strict';
module.exports = (sequelize, DataTypes) => {
  const company_shares = sequelize.define('company_shares', {
    company_id: DataTypes.INTEGER,
    profit_center_id: DataTypes.INTEGER,
    percentage: DataTypes.INTEGER,
    type: DataTypes.STRING,
    code: DataTypes.STRING
  }, 
  { 
    hooks: {
      /*beforeValidate: function(user, options) {
        return user.name = 'happy'
      },*/
      afterValidate: function(field, options) {
        let percentage = field.percentage;
        let type;
        if(percentage <= 20 ){
          type = 'non-konsolidasi';
        }
        if(percentage >= 20 && percentage <= 50 ){
          type = 'konsolidasi';
        }
        if(percentage >= 51 ){
          type = 'anak-perusahaan';
        }
        return field.type = type;
      }
    }
  },
  {});
  company_shares.associate = function(models) {
    // associations can be defined here
    company_shares.belongsTo(models.profit_centers, {
      foreignKey: 'profit_center_id',
      as : 'profit_company'
    });
    company_shares.hasMany(models.setoran_modals, {
      foreignKey: 'company_share_id',
      sourceKey: 'id'
    });
  };
  return company_shares;
};
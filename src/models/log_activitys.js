'use strict';
module.exports = (sequelize, DataTypes) => {
  const log_activitys = sequelize.define('log_activitys', {
    user_id: DataTypes.INTEGER,
    perusahaan_id: DataTypes.INTEGER,
    activity: DataTypes.STRING,
    log_time: DataTypes.DATE,
    active: DataTypes.INTEGER
  }, {});
  log_activitys.associate = function(models) {
    // associations can be defined here
  };
  return log_activitys;
};
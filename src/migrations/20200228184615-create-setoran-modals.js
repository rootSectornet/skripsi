'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('setoran_modals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      company_share_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'company_shares',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      rencana: {
        type: Sequelize.DOUBLE,
        defaultValue: 0
      },
      realisasi: {
        type: Sequelize.DOUBLE,
        defaultValue: 0
      },
      proyeksi: {
        type: Sequelize.DOUBLE,
        defaultValue: 0
      },
      month_year: {
        allowNull: true,
        type: Sequelize.DATEONLY
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('setoran_modals');
  }
};
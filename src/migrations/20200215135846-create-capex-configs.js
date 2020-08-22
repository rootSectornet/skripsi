'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('capex_configs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      }, 
      company_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'companies',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      mulai_konsesi: {
        type: Sequelize.INTEGER
      },
      masa_konsesi: {
        type: Sequelize.INTEGER
      },
      spmk: {
        type: Sequelize.STRING
      }, 
      sheet: {
        type: Sequelize.STRING
      },
      equity: {
        type: Sequelize.INTEGER
      },
      loan: {
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('capex_configs');
  }
};
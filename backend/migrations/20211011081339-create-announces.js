'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Announces', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nom_societe: {
        allowNull: false,
        type: Sequelize.STRING
      },
      skill: {
        allowNull: false,
        type: Sequelize.STRING
      },
      intitule: {
        allowNull: false,
        type: Sequelize.STRING
      },
      salaire: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING
      },
      lieu: {
        allowNull: false,
        type: Sequelize.STRING
      },
      referent: {
        allowNull: false,
        type: Sequelize.STRING
      },
      contrat: {
        allowNull: false,
        type: Sequelize.STRING
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Announces');
  }
};
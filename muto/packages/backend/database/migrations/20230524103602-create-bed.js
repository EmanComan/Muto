'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Beds', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      patient: {
        type: Sequelize.STRING
      },
      patientstatus: {
        type: Sequelize.STRING
      },
      bedtype: {
        type: Sequelize.STRING
      },
      bednumber: {
        type: Sequelize.INTEGER
      },
      allotmentdate: {
        type: Sequelize.STRING
      },
      dischargedate: {
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Beds');
  }
};
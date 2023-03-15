'use strict';

const { OrderSchema, ORDER_TABLE } = require('../models/order.model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.addColumn(ORDER_TABLE, 'successfull', OrderSchema.successfull)
  },

  async down (queryInterface) {
    await queryInterface.removeColumn(ORDER_TABLE, 'successfull')
  }
};

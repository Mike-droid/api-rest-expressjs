'use strict';

const { CategorySchema, CATEGORY_TABLE } = require('./../models/category.model')
const { ProductSchema, PRODUCT_TABLE } = require('./../models/product.model')

//! importante que estén en este orden porque:
//! en nuestra lógica de negocio, los productos dependen de las categorias
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(CATEGORY_TABLE, CategorySchema)
    await queryInterface.createTable(PRODUCT_TABLE, ProductSchema)
  },

  async down (queryInterface) {
    await queryInterface.dropTable(PRODUCT_TABLE)
    await queryInterface.dropTable(CATEGORY_TABLE)
  }
};

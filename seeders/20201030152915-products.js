'use strict';
const faker = require('faker');
const product1 = [...Array(20)].map((user) => (
  {
    nama: faker.commerce.product(),
    id_warehouse: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  }
))
const product2 = [...Array(20)].map((user) => (
  {
    nama: faker.commerce.product(),
    id_warehouse: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  }
))
const product3 = [...Array(20)].map((user) => (
  {
    nama: faker.commerce.product(),
    id_warehouse: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  }
))
var produk = product1.concat(product2)
produk = produk.concat(product3)
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   return queryInterface.bulkInsert('products', produk, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('products', null, {});
  }
};

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Articles', [{
      image: 'img.jpg',
      title: '5 tips untuk menymbuhkan alergi',
      description: 'Solusi ampuh untuk menangangi gejala alergi',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('', null, {});
  }
};

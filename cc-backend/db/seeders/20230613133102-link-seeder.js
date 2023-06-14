'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Links', [{
      id: 1,
      url: 'https://www.alodokter.com/gatal-alergi-bisa-dikendalikan-dengan-cara-mudah-berikut'
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Links', null, {});
  }
};

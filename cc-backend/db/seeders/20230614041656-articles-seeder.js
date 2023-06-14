'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Articles', [{
      image: 'img.jpg',
      title: '5 tips untuk menyembuhkan alergi',
      description: 'Solusi ampuh untuk menangangi gejala alergi',
      allergy: 'bunga, kucing, debu',
      symptom: 'bersin, hidung merah',
      reason: 'bulu hewan kucing, makanan dengan bau menyengat',
      solution: 'hindari bermain dengan kucing dan makanan pedas',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Articles', null, {});
  }
};

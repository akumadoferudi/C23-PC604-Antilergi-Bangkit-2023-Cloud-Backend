'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Article_Links', [{
      articleId: 1,
      linkId: 1 
    }]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Article_Links', 'Article_Links_articleId_foreign_idx')
    await queryInterface.removeConstraint('Article_Links', 'Article_Links_linkId_foreign_idx')
    await queryInterface.bulkDelete('Article_Links', null, {});
  }
};

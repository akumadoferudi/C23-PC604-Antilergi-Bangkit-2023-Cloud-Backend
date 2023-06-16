'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Article_Links', 'articleId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Articles',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      // allowNull: true // sementara 
    });

    await queryInterface.addColumn('Article_Links', 'linkId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Links',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      // allowNull: true // sementara 
    });
  },
  // not fixed yet

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Article_Links', 'articleId', {});
    await queryInterface.removeColumn('Article_Links', 'linkId', {});
  }
};

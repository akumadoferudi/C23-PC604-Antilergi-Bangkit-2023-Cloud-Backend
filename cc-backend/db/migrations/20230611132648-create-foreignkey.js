'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Article_Allergies', 'articleId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Articles',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE' 
    });

    await queryInterface.addColumn('Article_Allergies', 'allergyId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Allergies',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE' 
    });

    await queryInterface.addColumn('Article_Symptoms', 'articleId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Articles',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE' 
    });

    await queryInterface.addColumn('Article_Symptoms', 'symtompId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Symptoms',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE' 
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Article_Allergies', 'articleId', {});
    await queryInterface.removeColumn('Article_Allergies', 'allergyId', {});
    await queryInterface.removeColumn('Article_Symptoms', 'articleId', {});
    await queryInterface.removeColumn('Article_Symptoms', 'symtompId', {});
  }
};

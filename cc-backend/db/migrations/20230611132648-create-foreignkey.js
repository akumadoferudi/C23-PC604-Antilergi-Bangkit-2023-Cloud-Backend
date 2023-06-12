'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('article_allergy', 'articleId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'article',
        key: 'Id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE' 
    });

    await queryInterface.addColumn('article_allergy', 'allergyId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'allergy',
        key: 'Id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE' 
    });

    await queryInterface.addColumn('article_symptom', 'articleId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'article',
        key: 'Id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE' 
    });

    await queryInterface.addColumn('article_symptom', 'symtompId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'symtomp',
        key: 'Id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE' 
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('article_allergy', 'articleId', {});
    await queryInterface.removeColumn('article_allergy', 'allergyId', {});
    await queryInterface.removeColumn('article_symptom', 'articleId', {});
    await queryInterface.removeColumn('article_symptom', 'symtompId', {});
  }
};

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Users', [
        {
          username: 'Ferdi',
          email: 'freakingfreak76@gmail.com',
          password: '$2a$10$UcXhSYAribLRnyi1XcqyleNJ4giNzIf1cwNwxQrf33UBfcDJSY7Pa',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        // {
        //   username: 'Novel',
        //   email: 'novel@email.com',
        //   password: '$2a$10$OwGM/ayL6sFceySq3MBes.nfQwCzVQvsDboBA9TFzgYVdSWSMp/ii',
        //   createdAt: new Date(),
        //   updatedAt: new Date()
        // }
      ], {});
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Users', null, {});
  }
};

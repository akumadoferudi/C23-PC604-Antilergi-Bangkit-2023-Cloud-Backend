'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.createTable('user', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      }
    }).then(function() {
      queryInterface.createTable('email', {
        type: 'FOREIGN KEY',
        name: '?????', // useful if using queryInterface.removeConstraint
        references: {
          table: '????',
          field: 'id',
        },
        onDelete: 'no action',
        onUpdate: 'no action',
      })
    });
      /** Gw masih bingung buat yg bagian ini gmn karena 
       * yang masih gw pahami setelah gw baca - baca lagi.
       * cuma sgni doang sih. gw masih bngng buat name itu 
       *  sama yang table. secara keseluruhan ini yang gw pahami buat
       * bagian foreign key kaya yang contoh website yang lu kasih
      */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('foreignkey');
    /**
     * Bagian ini gw masih ini aja
     */
    
    
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};

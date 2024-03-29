'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('pacientes', [
      {
        nome: 'John Doe',
        email: 'John@gmail.com',
        idade: '2022/01/01',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        nome: 'Junior Lima',
        email: 'Junior@gmail.com',
        idade: '2022/01/01',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        nome: 'Marocs Doe',
        email: 'Marocs@gmail.com',
        idade: '2022/01/01',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        nome: 'Tomas Doe',
        email: 'Tomas@gmail.com',
        idade: '2022/01/01',
        createdAt: new Date(),
        updatedAt: new Date()

      },

    ], {});

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      
     await queryInterface.bulkInsert('pacientes', [
       {
        nome: 'John Doe',
        email: 'John@gmail.com',
        idade: '2022/01/01',
        
      },
       {
        nome: 'John Doe',
        email: 'John@gmail.com',
        idade: '2022/01/01',
        
      },
       {
        nome: 'John Doe',
        email: 'John@gmail.com',
        idade: '2022/01/01',
        
      },
       {
        nome: 'John Doe',
        email: 'John@gmail.com',
        idade: '2022/01/01',
        
      },
       {
        nome: 'John Doe',
        email: 'John@gmail.com',
        idade: '2022/01/01',
        
      },
       {
        nome: 'John Doe',
        email: 'John@gmail.com',
        idade: '2022/01/01',
        
      },
       {
        nome: 'John Doe',
        email: 'John@gmail.com',
        idade: '2022/01/01',
        
      },
       {
        nome: 'John Doe',
        email: 'John@gmail.com',
        idade: '2022/01/01',
        
      },
       {
        nome: 'John Doe',
        email: 'John@gmail.com',
        idade: '2022/01/01',
        
      },
       



    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

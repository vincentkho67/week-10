'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Users', [
    {
      name: "Baim",
      email: "baim@gmail.com",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Sukron",
      email: "sukron@gmail.com",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Sukron",
      email: "sukron@gmail.com",
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ,
    {
      name: "Sukron",
      email: "sukron@gmail.com",
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ,
    {
      name: "Sukron",
      email: "sukron@gmail.com",
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ,
    {
      name: "Sukron",
      email: "sukron@gmail.com",
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ,
    {
      name: "Sukron",
      email: "sukron@gmail.com",
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ,
    {
      name: "Sukron",
      email: "sukron@gmail.com",
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ,
    {
      name: "Sukron",
      email: "sukron@gmail.com",
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ,
    {
      name: "Sukron",
      email: "sukron@gmail.com",
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ,
    {
      name: "Sukron",
      email: "sukron@gmail.com",
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ,
    {
      name: "Sukron",
      email: "sukron@gmail.com",
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ,
    {
      name: "Sukron",
      email: "sukron@gmail.com",
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ,
    {
      name: "Sukron",
      email: "sukron@gmail.com",
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ,
    {
      name: "Sukron",
      email: "sukron@gmail.com",
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ,
    {
      name: "Sukron",
      email: "sukron@gmail.com",
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ,
    {
      name: "Sukron",
      email: "sukron@gmail.com",
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ,
    {
      name: "Sukron",
      email: "sukron@gmail.com",
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ,
    {
      name: "Sukron",
      email: "sukron@gmail.com",
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ,
    {
      name: "Sukron",
      email: "sukron@gmail.com",
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ,
    {
      name: "Sukron",
      email: "sukron@gmail.com",
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ,
    {
      name: "Sukron",
      email: "sukron@gmail.com",
      createdAt: new Date(),
      updatedAt: new Date()
    }
   ])
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

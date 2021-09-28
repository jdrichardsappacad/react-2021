'use strict';
const data = require('../seeder-content/elements.json');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Elements', data, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Elements', null, { truncate: true, cascade: true, restartIdentity: true });
  }
};

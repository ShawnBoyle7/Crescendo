'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Genres', 
    [
      { name: "Piano", createdAt: new Date(), updatedAt: new Date() },
      { name: "Country", createdAt: new Date(), updatedAt: new Date() },
      { name: "Jazz", createdAt: new Date(), updatedAt: new Date() },
      { name: "Rock", createdAt: new Date(), updatedAt: new Date() },
      { name: "Pop", createdAt: new Date(), updatedAt: new Date() }
    ])
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Genres', null, { truncate: true, cascade: true, restartIdentity: true });
  }
};
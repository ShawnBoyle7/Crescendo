'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Genres',
    [
      { name: "Rock", createdAt: new Date(), updatedAt: new Date() },
      { name: "Pop", createdAt: new Date(), updatedAt: new Date() },
      { name: "Hip Hop", createdAt: new Date(), updatedAt: new Date() },
      { name: "Anisong", createdAt: new Date(), updatedAt: new Date() },
      { name: "Metal", createdAt: new Date(), updatedAt: new Date() },
      { name: "Punk Rock", createdAt: new Date(), updatedAt: new Date() },
      { name: "Southern Rock", createdAt: new Date(), updatedAt: new Date() },
      { name: "Progressive Rock", createdAt: new Date(), updatedAt: new Date() },
      { name: "Alternative Rock", createdAt: new Date(), updatedAt: new Date() },
    ])
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Genres', null, { truncate: true, cascade: true, restartIdentity: true });
  }
};
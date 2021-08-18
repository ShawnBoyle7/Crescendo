'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Song_User_Joins',
    [
      { songId: 1, userId: 1, createdAt: new Date(), updatedAt: new Date() },
      { songId: 2, userId: 1, createdAt: new Date(), updatedAt: new Date() },
      { songId: 3, userId: 1, createdAt: new Date(), updatedAt: new Date() },
      { songId: 3, userId: 2, createdAt: new Date(), updatedAt: new Date() },
      { songId: 3, userId: 3, createdAt: new Date(), updatedAt: new Date() },
      { songId: 4, userId: 1, createdAt: new Date(), updatedAt: new Date() },
      { songId: 4, userId: 2, createdAt: new Date(), updatedAt: new Date() },
    ])
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Song_User_Joins', null, { truncate: true, cascade: true, restartIdentity: true });
  }
};
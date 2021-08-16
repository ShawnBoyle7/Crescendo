'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Songs', 
    [
      { name: "A Few Moments Later", genreId: 1, artistId: 1, albumId: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: "Country Boy", genreId: 2, artistId: 2, albumId: 2, createdAt: new Date(), updatedAt: new Date() },
      { name: "Milk Coffee", genreId: 3, artistId: 3, albumId: 3, createdAt: new Date(), updatedAt: new Date() },
      { name: "Jack The Lumberer", genreId: 4, artistId: 4, albumId: 4, createdAt: new Date(), updatedAt: new Date() },
      { name: "Losing My Mind", genreId: 5, artistId: 5, albumId: 5, createdAt: new Date(), updatedAt: new Date() }
    ])  
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Songs', null, { truncate: true, cascade: true, restartIdentity: true });
  }
};
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Songs', 
    [
      { name: "A Few Moments Later", artistId: 1, albumId: 1, imgUrl: "https://i.imgur.com/fCS9bLj.png", createdAt: new Date(), updatedAt: new Date() },
      { name: "Country Boy", artistId: 2, albumId: 2, imgUrl: "https://i.imgur.com/fCS9bLj.png", createdAt: new Date(), updatedAt: new Date() },
      { name: "Milk Coffee", artistId: 3, albumId: 3, imgUrl: "https://i.imgur.com/fCS9bLj.png", createdAt: new Date(), updatedAt: new Date() },
      { name: "Jack The Lumberer", artistId: 4, albumId: 4, imgUrl: "https://i.imgur.com/fCS9bLj.png",createdAt: new Date(), updatedAt: new Date() },
      { name: "Losing My Mind", artistId: 5, albumId: 5, imgUrl: "https://i.imgur.com/fCS9bLj.png", createdAt: new Date(), updatedAt: new Date() }
    ])  
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Songs', null, { truncate: true, cascade: true, restartIdentity: true });
  }
};
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Albums', 
    [
      { name: "Piano Music The Album", artistId: 1, albumImgUrl: "https://i.imgur.com/tfiI26M.jpg", createdAt: new Date(), updatedAt: new Date() },
      { name: "Trucks", artistId: 2, albumImgUrl: "https://i.imgur.com/tfiI26M.jpg", createdAt: new Date(), updatedAt: new Date() },
      { name: "Mr Ryan The Album", albumImgUrl: "https://i.imgur.com/tfiI26M.jpg", artistId: 3, createdAt: new Date(), updatedAt: new Date() },
      { name: "The Wild", artistId: 4, albumImgUrl: "https://i.imgur.com/tfiI26M.jpg", createdAt: new Date(), updatedAt: new Date() },
      { name: "Jay's Today", artistId: 5, albumImgUrl: "https://i.imgur.com/tfiI26M.jpg", createdAt: new Date(), updatedAt: new Date() }
    ])  
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Albums', null, { truncate: true, cascade: true, restartIdentity: true });
  }
};
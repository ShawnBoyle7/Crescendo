'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Playlists',
    [
      { name: "House of the Rising Sun the Playlist", userId: 1, playlistImgUrl: "https://i.imgur.com/rUCUYPz.png", createdAt: new Date(), updatedAt: new Date() },
      { name: "They call me the Ghost", userId: 1, playlistImgUrl: "https://i.imgur.com/rUCUYPz.png", createdAt: new Date(), updatedAt: new Date() },
      { name: "Tyrannical Fruit", userId: 2, playlistImgUrl: "https://i.imgur.com/rUCUYPz.png", createdAt: new Date(), updatedAt: new Date() },
      { name: "Surreal Alligator Vibes", userId: 1, playlistImgUrl: "https://i.imgur.com/rUCUYPz.png", createdAt: new Date(), updatedAt: new Date() },
      { name: "Rock Music", userId: 3, playlistImgUrl: "https://i.imgur.com/rUCUYPz.png", createdAt: new Date(), updatedAt: new Date() }
    ])
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Playlists', null, { truncate: true, cascade: true, restartIdentity: true });
  }
};
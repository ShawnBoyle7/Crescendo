'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Song_Playlist_Joins',
        [
            { songId: 1, playlistId: 1, createdAt: new Date(), updatedAt: new Date() },
            { songId: 1, playlistId: 2, createdAt: new Date(), updatedAt: new Date() },
            { songId: 1, playlistId: 3, createdAt: new Date(), updatedAt: new Date() },
            { songId: 2, playlistId: 1, createdAt: new Date(), updatedAt: new Date() },
            { songId: 4, playlistId: 1, createdAt: new Date(), updatedAt: new Date() },
            { songId: 3, playlistId: 1, createdAt: new Date(), updatedAt: new Date() },
            { songId: 4, playlistId: 2, createdAt: new Date(), updatedAt: new Date() },
        ])
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Song_Playlist_Joins', null, { truncate: true, cascade: true, restartIdentity: true });
    }
};
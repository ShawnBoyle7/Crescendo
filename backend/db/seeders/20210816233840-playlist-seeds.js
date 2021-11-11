'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Playlists',
        [
            { name: "Rock", userId: 1, description: "", createdAt: new Date(), updatedAt: new Date() },
            { name: "Classic Rock", userId: 1, description: "", createdAt: new Date(), updatedAt: new Date() },
            { name: "Pop Rock", userId: 1, description: "", createdAt: new Date(), updatedAt: new Date() },
            { name: "Rock Music", userId: 1, description: "", createdAt: new Date(), updatedAt: new Date() }
        ])
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Playlists', null, { truncate: true, cascade: true, restartIdentity: true });
    }
};
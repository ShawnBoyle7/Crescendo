'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('User_Album_Joins',
        [
            { albumId: 1, userId: 1, createdAt: new Date(), updatedAt: new Date() },
            { albumId: 1, userId: 2, createdAt: new Date(), updatedAt: new Date() },
            { albumId: 1, userId: 3, createdAt: new Date(), updatedAt: new Date() },
            { albumId: 2, userId: 1, createdAt: new Date(), updatedAt: new Date() },
            { albumId: 4, userId: 1, createdAt: new Date(), updatedAt: new Date() },
            { albumId: 4, userId: 2, createdAt: new Date(), updatedAt: new Date() },
        ])
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('User_Album_Joins', null, { truncate: true, cascade: true, restartIdentity: true });
    }
};
'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Songs', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING
            },
            artistId: {
                type: Sequelize.INTEGER,
                references: { model: "Artists" }
            },
            albumId: {
                type: Sequelize.INTEGER,
                references: { model: "Albums" }
            },
            songUrl: {
                type: Sequelize.STRING
            },
            songLength: {
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Songs');
    }
};
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
      genreId: {
        type: Sequelize.INTEGER,
        references: { model: "Genres" }
      },
      artistId: {
        type: Sequelize.INTEGER,
        references: { model: "Artists" }
      },
      albumId: {
        type: Sequelize.INTEGER,
        references: { model: "Albums" }
      },
      songImgUrl: {
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
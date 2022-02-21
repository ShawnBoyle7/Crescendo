module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('song_genre_joins', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    genreId: {
      type: Sequelize.INTEGER,
    },
    songId: {
      type: Sequelize.INTEGER,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface) => queryInterface.dropTable('song_genre_joins'),
};

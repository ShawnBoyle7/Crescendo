module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('artist_genre_joins', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    genreId: {
      type: Sequelize.INTEGER,
    },
    artistId: {
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
  down: (queryInterface) => queryInterface.dropTable('artist_genre_joins'),
};

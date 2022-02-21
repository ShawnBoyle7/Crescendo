module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('song_playlist_joins', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    songId: {
      type: Sequelize.INTEGER,
      references: { model: 'Songs' },
    },
    playlistId: {
      type: Sequelize.INTEGER,
      references: { model: 'Playlists' },
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
  down: (queryInterface) => queryInterface.dropTable('song_playlist_joins'),
};

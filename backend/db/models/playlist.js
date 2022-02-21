module.exports = (sequelize, DataTypes) => {
  const Playlist = sequelize.define('Playlist', {
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    imgUrl: DataTypes.STRING,
    description: DataTypes.STRING,
  }, {});
  Playlist.associate = (models) => {
    const columnMappingSongs = {
      through: 'song_playlist_join',
      foreignKey: 'playlistId',
      otherKey: 'songId',
    };

    Playlist.belongsToMany(models.Song, columnMappingSongs);
    Playlist.belongsTo(models.User, { foreignKey: 'userId' });
  };
  return Playlist;
};

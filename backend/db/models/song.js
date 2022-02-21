module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('Song', {
    name: DataTypes.STRING,
    artistId: DataTypes.INTEGER,
    albumId: DataTypes.INTEGER,
    songUrl: DataTypes.STRING,
    songLength: DataTypes.STRING,
  }, {});
  Song.associate = (models) => {
    const columnMappingPlaylists = {
      through: 'song_playlist_join',
      foreignKey: 'songId',
      otherKey: 'playlistId',
    };

    const columnMappingUsers = {
      through: 'song_user_join',
      foreignKey: 'songId',
      otherKey: 'userId',
    };

    const columnMappingGenres = {
      through: 'song_genre_join',
      foreignKey: 'songId',
      otherKey: 'genreId',
    };

    Song.belongsToMany(models.User, columnMappingUsers);
    Song.belongsToMany(models.Playlist, columnMappingPlaylists);
    Song.belongsToMany(models.Genre, columnMappingGenres);
    Song.belongsTo(models.Album, { foreignKey: 'albumId' });
    Song.belongsTo(models.Artist, { foreignKey: 'artistId' });
  };
  return Song;
};

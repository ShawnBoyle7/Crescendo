'use strict';
module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('Song', {
    name: DataTypes.STRING,
    artistId: DataTypes.INTEGER,
    albumId: DataTypes.INTEGER,
    songUrl: DataTypes.STRING,
    imgUrl: DataTypes.STRING
  }, {});
  Song.associate = function(models) {
    const columnMappingPlaylists = {
      through: "Song_Playlist_Join",
      foreignKey: "songId",
      otherKey: "playlistId"
    };

    const columnMappingUsers = {
      through: "Song_User_Join",
      foreignKey: "songId",
      otherKey: "userId"
    }

    const columnMappingGenres = {
      through: "Song_Genre_Join",
      foreignKey: "songId",
      otherKey: "genreId"
    }

    Song.belongsToMany(models.User, columnMappingUsers);
    Song.belongsToMany(models.Playlist, columnMappingPlaylists);
    Song.belongsTomany(models.Genre, columnMappingGenres)
    Song.belongsTo(models.Album, { foreignKey: "albumId" });
    Song.belongsTo(models.Artist, { foreignKey: "artistId" });
  };
  return Song;
};
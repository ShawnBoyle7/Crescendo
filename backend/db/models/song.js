'use strict';
module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('Song', {
    name: DataTypes.STRING,
    genreId: DataTypes.INTEGER,
    artistId: DataTypes.INTEGER,
    albumId: DataTypes.INTEGER
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

    Song.belongsToMany(models.User, columnMappingUsers);
    Song.belongsToMany(models.Playlist, columnMappingPlaylists);
    Song.belongsTo(models.Album, { foreignKey: "albumId" });
    Song.belongsTo(models.Genre, { foreignKey: "genreId" });
    Song.belongsTo(models.Artist, { foreignKey: "artistId" });
  };
  return Song;
};
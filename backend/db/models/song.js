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

    Song.belongsToMany(models.Playlist, columnMappingPlaylists);
    Song.belongsTo(models.Album, { foreignKey: "albumId" });
    Song.belongsTo(models.Genre, { foreignKey: "genreId" });
  };
  return Song;
};
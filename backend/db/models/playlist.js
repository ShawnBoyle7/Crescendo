'use strict';
module.exports = (sequelize, DataTypes) => {
  const Playlist = sequelize.define('Playlist', {
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    playlistImgUrl: DataTypes.STRING
  }, {});
  Playlist.associate = function(models) {
    const columnMappingSongs = {
      through: "Song_Playlist_Join",
      foreignKey: "playlistId",
      otherKey: "songId"
    };

    Playlist.belongsToMany(models.Song, columnMappingSongs);
    Playlist.belongsTo(models.User, { foreignKey: "userId" });
  };
  return Playlist;
};
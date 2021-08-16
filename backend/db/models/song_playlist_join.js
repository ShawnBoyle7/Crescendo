'use strict';
module.exports = (sequelize, DataTypes) => {
  const Song_Playlist_Join = sequelize.define('Song_Playlist_Join', {
    songId: DataTypes.INTEGER,
    playlistId: DataTypes.INTEGER
  }, {});
  Song_Playlist_Join.associate = function(models) {
    // associations can be defined here
  };
  return Song_Playlist_Join;
};
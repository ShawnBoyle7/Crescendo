'use strict';
module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('Song', {
    genreId: DataTypes.INTEGER,
    artistId: DataTypes.INTEGER,
    albumId: DataTypes.INTEGER
  }, {});
  Song.associate = function(models) {
    // associations can be defined here
  };
  return Song;
};
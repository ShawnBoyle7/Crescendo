'use strict';
module.exports = (sequelize, DataTypes) => {
  const artist_genre_join = sequelize.define('artist_genre_join', {
    genreId: DataTypes.INTEGER,
    artistId: DataTypes.INTEGER
  }, {});
  artist_genre_join.associate = function(models) {
    // associations can be defined here
  };
  return artist_genre_join;
};
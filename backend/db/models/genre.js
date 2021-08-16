'use strict';
module.exports = (sequelize, DataTypes) => {
  const Genre = sequelize.define('Genre', {
    name: DataTypes.STRING
  }, {});
  Genre.associate = function(models) {
    Genre.hasMany(models.Song, { foreignKey: "genreId" });
    Genre.hasMany(models.Artist, { foreignKey: "genreId" });
  };
  return Genre;
};
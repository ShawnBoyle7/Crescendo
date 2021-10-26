'use strict';
module.exports = (sequelize, DataTypes) => {
  const Artist = sequelize.define('Artist', {
    name: DataTypes.STRING,
    imgUrl: DataTypes.STRING
  }, {});
  Artist.associate = function(models) {
    const columnMappingUsers = {
      through: "User_Artist_Join",
      foreignKey: "artistId",
      otherKey: "userId"
    };

    const columnMappingGenres = {
      through: "Artist_Genre_Join",
      foreignKey: "artistId",
      otherKey: "genreId"
    }

    Artist.belongsToMany(models.User, columnMappingUsers);
    Artist.belongsToMany(models.Genre, columnMappingGenres);
    Artist.hasMany(models.Album, { foreignKey: "artistId" });
    Artist.hasMany(models.Song, { foreignKey: "artistId" });
  };
  return Artist;
};
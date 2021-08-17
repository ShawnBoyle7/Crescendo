'use strict';
module.exports = (sequelize, DataTypes) => {
  const Artist = sequelize.define('Artist', {
    name: DataTypes.STRING,
    genreId: DataTypes.INTEGER,
    artistImgUrl: DataTypes.STRING
  }, {});
  Artist.associate = function(models) {
    const columnMapping = {
      through: "User_Artist_Join",
      foreignKey: "artistId",
      otherKey: "userId"
    };

    Artist.belongsToMany(models.User, columnMapping);
    Artist.hasMany(models.Album, { foreignKey: "artistId" });
    Artist.hasMany(models.Song, { foreignKey: "artistId" });
    Artist.belongsTo(models.Genre, { foreignKey: "genreId" });
  };
  return Artist;
};
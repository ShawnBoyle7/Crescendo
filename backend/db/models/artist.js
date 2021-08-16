'use strict';
module.exports = (sequelize, DataTypes) => {
  const Artist = sequelize.define('Artist', {
    name: DataTypes.STRING,
    genreId: DataTypes.INTEGER
  }, {});
  Artist.associate = function(models) {
    const columnMapping = {
      through: "User_Artist_Join",
      foreignKey: "artistId",
      otherKey: "userId"
    };

    Artist.belongsToMany(models.User, columnMapping);
    Artist.hasMany(models.Album, { foreignKey: "artistId" });
  };
  return Artist;
};
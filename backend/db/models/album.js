'use strict';
module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    name: DataTypes.STRING,
    artistId: DataTypes.INTEGER
  }, {});
  Album.associate = function(models) {
    const columnMapping = {
      through: "User_Album_Join",
      foreignKey: "albumId",
      otherKey: "userId"
    }
    
    Album.belongsToMany(models.User, columnMapping)
    Album.belongsTo(models.Artist, { foreignKey: "artistId" })

  };
  return Album;
};
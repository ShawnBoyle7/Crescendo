'use strict';
module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    artistId: DataTypes.INTEGER
  }, {});
  Album.associate = function(models) {
    
  };
  return Album;
};
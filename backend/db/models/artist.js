'use strict';
module.exports = (sequelize, DataTypes) => {
  const Artist = sequelize.define('Artist', {
    name: DataTypes.STRING,
    genreId: DataTypes.INTEGER
  }, {});
  Artist.associate = function(models) {
    // associations can be defined here
  };
  return Artist;
};
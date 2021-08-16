'use strict';
module.exports = (sequelize, DataTypes) => {
  const User_Artist_Join = sequelize.define('User_Artist_Join', {
    userId: DataTypes.INTEGER,
    artistId: DataTypes.INTEGER
  }, {});
  User_Artist_Join.associate = function(models) {
    // associations can be defined here
  };
  return User_Artist_Join;
};
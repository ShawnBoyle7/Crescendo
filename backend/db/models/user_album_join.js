/* eslint-disable camelcase */

module.exports = (sequelize, DataTypes) => {
  const user_album_join = sequelize.define('user_album_join', {
    userId: DataTypes.INTEGER,
    albumId: DataTypes.INTEGER,
  }, {});
  user_album_join.associate = () => {
    // associations can be defined here
  };
  return user_album_join;
};

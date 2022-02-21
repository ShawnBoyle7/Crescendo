/* eslint-disable camelcase */

module.exports = (sequelize, DataTypes) => {
  const user_artist_join = sequelize.define('user_artist_join', {
    userId: DataTypes.INTEGER,
    artistId: DataTypes.INTEGER,
  }, {});
  user_artist_join.associate = () => {
  // associations can be defined here
  };
  return user_artist_join;
};

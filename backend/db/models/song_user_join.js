/* eslint-disable camelcase */

module.exports = (sequelize, DataTypes) => {
  const song_user_join = sequelize.define('song_user_join', {
    songId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
  }, {});
  song_user_join.associate = () => {
    // associations can be defined here
  };
  return song_user_join;
};

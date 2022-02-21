/* eslint-disable camelcase */

module.exports = (sequelize, DataTypes) => {
  const song_playlist_join = sequelize.define('song_playlist_join', {
    songId: DataTypes.INTEGER,
    playlistId: DataTypes.INTEGER,
  }, {});
  song_playlist_join.associate = () => {
  // associations can be defined here
  };
  return song_playlist_join;
};

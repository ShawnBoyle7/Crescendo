/* eslint-disable camelcase */

module.exports = (sequelize, DataTypes) => {
  const song_genre_join = sequelize.define('song_genre_join', {
    genreId: DataTypes.INTEGER,
    songId: DataTypes.INTEGER,
  }, {});
  song_genre_join.associate = () => {

  };
  return song_genre_join;
};

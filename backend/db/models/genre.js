module.exports = (sequelize, DataTypes) => {
  const Genre = sequelize.define('Genre', {
    name: DataTypes.STRING,
  }, {});

  const columnMappingSongs = {
    through: 'song_genre_join',
    foreignKey: 'genreId',
    otherKey: 'songId',
  };

  const columnMappingArtists = {
    through: 'artist_genre_join',
    foreignKey: 'genreId',
    otherKey: 'artistId',
  };

  Genre.associate = (models) => {
    Genre.belongsToMany(models.Song, columnMappingSongs);
    Genre.belongsToMany(models.Artist, columnMappingArtists);
  };
  return Genre;
};

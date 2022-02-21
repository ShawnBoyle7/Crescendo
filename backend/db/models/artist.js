module.exports = (sequelize, DataTypes) => {
  const Artist = sequelize.define('Artist', {
    name: DataTypes.STRING,
    imgUrl: DataTypes.STRING,
    headerUrl: DataTypes.STRING,
  }, {});
  Artist.associate = (models) => {
    const columnMappingUsers = {
      through: 'user_artist_join',
      foreignKey: 'artistId',
      otherKey: 'userId',
    };

    const columnMappingGenres = {
      through: 'artist_genre_join',
      foreignKey: 'artistId',
      otherKey: 'genreId',
    };

    Artist.belongsToMany(models.User, columnMappingUsers);
    Artist.belongsToMany(models.Genre, columnMappingGenres);
    Artist.hasMany(models.Album, { foreignKey: 'artistId' });
    Artist.hasMany(models.Song, { foreignKey: 'artistId' });
  };
  return Artist;
};

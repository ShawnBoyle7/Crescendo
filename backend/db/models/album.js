module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    name: DataTypes.STRING,
    imgUrl: DataTypes.STRING,
    releaseDate: DataTypes.INTEGER,
    songCount: DataTypes.INTEGER,
    albumDuration: DataTypes.STRING,
    artistId: DataTypes.INTEGER,
  }, {});
  Album.associate = (models) => {
    const columnMapping = {
      through: 'user_album_join',
      foreignKey: 'albumId',
      otherKey: 'userId',
    };

    Album.belongsToMany(models.User, columnMapping);
    Album.belongsTo(models.Artist, { foreignKey: 'artistId' });
    Album.hasMany(models.Song, { foreignKey: 'albumId' });
  };
  return Album;
};

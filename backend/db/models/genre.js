'use strict';
module.exports = (sequelize, DataTypes) => {
    const Genre = sequelize.define('Genre', {
        name: DataTypes.STRING
    }, {});

    const columnMappingSongs = {
        through: "Song_Genre_Join",
        foreignKey: "genreId",
        otherKey: "songId"
    }
    
    const columnMappingArtists = {
        through: "Artist_Genre_Join",
        foreignKey: "genreId",
        otherKey: "artistId"
    }

    Genre.associate = function(models) {
        Genre.belongsToMany(models.Song, columnMappingSongs)
        Genre.belongsToMany(models.Artist, columnMappingArtists)
    };
    return Genre;
};
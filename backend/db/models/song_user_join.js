'use strict';
module.exports = (sequelize, DataTypes) => {
    const Song_User_Join = sequelize.define('Song_User_Join', {
        songId: DataTypes.INTEGER,
        userId: DataTypes.INTEGER,
    }, {});
    Song_User_Join.associate = function(models) {
        // associations can be defined here
    };
    return Song_User_Join;
};
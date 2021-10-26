'use strict';
module.exports = (sequelize, DataTypes) => {
    const User_Album_Join = sequelize.define('User_Album_Join', {
        userId: DataTypes.INTEGER,
        albumId: DataTypes.INTEGER
    }, {});
    User_Album_Join.associate = function(models) {
        // associations can be defined here
    };
    return User_Album_Join;
};
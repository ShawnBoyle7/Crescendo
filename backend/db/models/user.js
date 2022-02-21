/* eslint-disable func-names */

const { Validator } = require('sequelize');
const bcrypt = require('bcryptjs');
const { Op } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [3, 256],
        },
        unique: {
          args: 'email',
          msg: 'Email is already in use',
        },
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [3, 30],
          isNotEmail(value) {
            if (Validator.isEmail(value)) {
              throw new Error('Cannot be an email.');
            }
          },
        },
        unique: {
          args: 'username',
          msg: 'Username is already in use',
        },
      },
      hashedPassword: {
        type: DataTypes.STRING.BINARY,
        allowNull: false,
        validate: {
          len: [60, 60],
        },
      },
    },
    {
      defaultScope: {
        attributes: {
          exclude: ['hashedPassword', 'email', 'createdAt', 'updatedAt'],
        },
      },
      scopes: {
        currentUser: {
          attributes: { exclude: ['hashedPassword'] },
        },
        loginUser: {
          attributes: {},
        },
      },
    },
  );

  User.prototype.toSafeObject = function () { // remember, this cannot be an arrow function
    const { id, username, email } = this; // context will be the User instance
    return { id, username, email };
  };

  User.prototype.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.hashedPassword.toString());
  };

  User.getCurrentUserById = async function (id) {
    return User.scope('currentUser').findByPk(id);
  };

  User.login = async function ({ credential, password }) {
    const user = await User.scope('loginUser').findOne({
      where: {
        [Op.or]: {
          username: credential,
          email: credential,
        },
      },
    });

    if (user && user.validatePassword(password)) {
      return User.scope('currentUser').findByPk(user.id);
    }
    return 'Login failed';
  };

  User.signup = async function ({ username, email, password }) {
    const hashedPassword = bcrypt.hashSync(password);
    const user = await User.create({
      username,
      email,
      hashedPassword,
    });
    return User.scope('currentUser').findByPk(user.id);
  };

  User.associate = function (models) {
    const columnMappingArtists = {
      through: 'user_artist_join',
      foreignKey: 'userId',
      otherKey: 'artistId',
    };

    const columnMappingAlbums = {
      through: 'user_album_join',
      foreignKey: 'userId',
      otherKey: 'albumId',
    };

    const columnMappingSongs = {
      through: 'song_user_join',
      foreignKey: 'userId',
      otherKey: 'songId',
    };

    User.belongsToMany(models.Song, columnMappingSongs);
    User.belongsToMany(models.Artist, columnMappingArtists);
    User.belongsToMany(models.Album, columnMappingAlbums);
    User.hasMany(models.Playlist, { foreignKey: 'userId' });
  };

  return User;
};

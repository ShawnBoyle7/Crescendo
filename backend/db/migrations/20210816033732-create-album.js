module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Albums', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: {
      type: Sequelize.STRING(50),
      allowNull: false,
      unique: true,
    },
    imgUrl: {
      type: Sequelize.STRING,
    },
    releaseDate: {
      type: Sequelize.INTEGER,
    },
    songCount: {
      type: Sequelize.INTEGER,
    },
    albumDuration: {
      type: Sequelize.STRING,
    },
    artistId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: { model: 'Artists' },
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface) => queryInterface.dropTable('Albums'),
};

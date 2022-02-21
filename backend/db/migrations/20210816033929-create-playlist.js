module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Playlists', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    imgUrl: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    userId: {
      type: Sequelize.INTEGER,
      references: { model: 'Users' },
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
  down: (queryInterface) => queryInterface.dropTable('Playlists'),
};

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('user_album_joins', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    userId: {
      type: Sequelize.INTEGER,
      references: { model: 'Users' },
    },
    albumId: {
      type: Sequelize.INTEGER,
      references: { model: 'Albums' },
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
  down: (queryInterface) => queryInterface.dropTable('user_album_joins'),
};

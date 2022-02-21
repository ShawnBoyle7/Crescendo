module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('user_artist_joins', {
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
    artistId: {
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
  down: (queryInterface) => queryInterface.dropTable('user_artist_joins'),
};

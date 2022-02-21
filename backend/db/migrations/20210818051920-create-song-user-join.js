module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('song_user_joins', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    songId: {
      type: Sequelize.INTEGER,
      references: { model: 'Songs' },
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
  down: (queryInterface) => queryInterface.dropTable('song_User_Joins'),
};

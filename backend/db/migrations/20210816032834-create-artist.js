module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Artists', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: {
      type: Sequelize.STRING(40),
      allowNull: false,
      unique: true,
    },
    imgUrl: {
      type: Sequelize.STRING,
    },
    headerUrl: {
      type: Sequelize.STRING,
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
  down: (queryInterface) => queryInterface.dropTable('Artists'),
};

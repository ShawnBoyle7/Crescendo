const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Users', [
    {
      email: 'demo@demo.io',
      username: 'DemoUser',
      hashedPassword: bcrypt.hashSync('password'),
    },
    {
      email: 'marluxiarose@gmail.com',
      username: 'Marluxia',
      hashedPassword: bcrypt.hashSync('password'),
    },
    {
      email: 'therealaxel@gmail.com',
      username: 'Axel',
      hashedPassword: bcrypt.hashSync('password'),
    },
  ], {}),

  down: (queryInterface, Sequelize) => {
    const { Op } = Sequelize;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['DemoUser', 'Marluxia', 'Axel'] },
    }, {});
  },
};

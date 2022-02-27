module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert(
    'Playlists',
    [
      {
        name: 'Rock', userId: 1, description: '', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Vibe Check', userId: 1, description: '', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'FLOW Nation', userId: 1, description: '', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: '2000\'s', userId: 1, description: '', createdAt: new Date(), updatedAt: new Date(),
      },
    ],
  ),
  down: (queryInterface) => queryInterface.bulkDelete('Playlists', null, { truncate: true, cascade: true, restartIdentity: true }),
};

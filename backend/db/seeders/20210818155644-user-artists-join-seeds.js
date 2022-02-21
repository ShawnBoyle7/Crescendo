module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert(
    'user_artist_joins',
    [
      {
        artistId: 1, userId: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        artistId: 1, userId: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        artistId: 1, userId: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        artistId: 2, userId: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        artistId: 4, userId: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        artistId: 4, userId: 2, createdAt: new Date(), updatedAt: new Date(),
      },
    ],
  ),
  down: (queryInterface) => queryInterface.bulkDelete('user_artist_joins', null, { truncate: true, cascade: true, restartIdentity: true }),
};

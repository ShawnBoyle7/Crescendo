module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert(
    'song_user_joins',
    [
      {
        songId: 1, userId: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        songId: 2, userId: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        songId: 3, userId: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        songId: 3, userId: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        songId: 3, userId: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        songId: 4, userId: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        songId: 4, userId: 2, createdAt: new Date(), updatedAt: new Date(),
      },
    ],
  ),
  down: (queryInterface) => queryInterface.bulkDelete('song_user_joins', null, { truncate: true, cascade: true, restartIdentity: true }),
};

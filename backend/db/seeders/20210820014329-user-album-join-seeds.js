module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert(
    'user_album_joins',
    [
      {
        albumId: 1, userId: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        albumId: 1, userId: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        albumId: 2, userId: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        albumId: 4, userId: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        albumId: 4, userId: 2, createdAt: new Date(), updatedAt: new Date(),
      },
    ],
  ),
  down: (queryInterface) => queryInterface.bulkDelete('user_album_joins', null, { truncate: true, cascade: true, restartIdentity: true }),
};

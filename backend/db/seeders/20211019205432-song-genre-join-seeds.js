module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert(
    'song_genre_joins',
    [
      {
        genreId: 1, songId: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        genreId: 1, songId: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        genreId: 1, songId: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        genreId: 2, songId: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        genreId: 4, songId: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        genreId: 3, songId: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        genreId: 4, songId: 2, createdAt: new Date(), updatedAt: new Date(),
      },
    ],
  ),
  down: (queryInterface) => queryInterface.bulkDelete('song_genre_joins', null, { truncate: true, cascade: true, restartIdentity: true }),
};

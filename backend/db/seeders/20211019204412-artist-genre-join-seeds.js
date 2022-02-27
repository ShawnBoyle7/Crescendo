module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert(
    'artist_genre_joins',
    [
      {
        genreId: 1, artistId: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        genreId: 1, artistId: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        genreId: 1, artistId: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        genreId: 2, artistId: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        genreId: 4, artistId: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        genreId: 3, artistId: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        genreId: 4, artistId: 2, createdAt: new Date(), updatedAt: new Date(),
      },
    ],
  ),
  down: (queryInterface) => queryInterface.bulkDelete('artist_genre_joins', null, { truncate: true, cascade: true, restartIdentity: true }),
};

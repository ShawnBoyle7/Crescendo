module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert(
    'song_playlist_joins',
    [
      {
        songId: 1, playlistId: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        songId: 1, playlistId: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        songId: 1, playlistId: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        songId: 2, playlistId: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        songId: 4, playlistId: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        songId: 3, playlistId: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        songId: 4, playlistId: 2, createdAt: new Date(), updatedAt: new Date(),
      },
    ],
  ),
  down: (queryInterface) => queryInterface.bulkDelete('song_playlist_joins', null, { truncate: true, cascade: true, restartIdentity: true }),
};

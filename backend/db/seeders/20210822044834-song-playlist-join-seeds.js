module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert(
    'song_playlist_joins',
    [
      {
        songId: 4, playlistId: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        songId: 94, playlistId: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        songId: 55, playlistId: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        songId: 73, playlistId: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        songId: 84, playlistId: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        songId: 101, playlistId: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        songId: 16, playlistId: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        songId: 33, playlistId: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        songId: 47, playlistId: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        songId: 77, playlistId: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        songId: 45, playlistId: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        songId: 46, playlistId: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        songId: 47, playlistId: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        songId: 48, playlistId: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        songId: 49, playlistId: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        songId: 50, playlistId: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        songId: 51, playlistId: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        songId: 52, playlistId: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        songId: 53, playlistId: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        songId: 54, playlistId: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        songId: 55, playlistId: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        songId: 56, playlistId: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        songId: 57, playlistId: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        songId: 58, playlistId: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        songId: 59, playlistId: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        songId: 101, playlistId: 4, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        songId: 102, playlistId: 4, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        songId: 77, playlistId: 4, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        songId: 74, playlistId: 4, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        songId: 73, playlistId: 4, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        songId: 64, playlistId: 4, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        songId: 62, playlistId: 4, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        songId: 98, playlistId: 4, createdAt: new Date(), updatedAt: new Date(),
      },
    ],
  ),
  down: (queryInterface) => queryInterface.bulkDelete('song_playlist_joins', null, { truncate: true, cascade: true, restartIdentity: true }),
};

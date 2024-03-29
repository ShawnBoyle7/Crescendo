const express = require('express');
const asyncHandler = require('express-async-handler');
const {
  Playlist, Album, Artist, Song, User, song_playlist_join,
} = require('../../db/models');

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
  const playlists = await Playlist.findAll({
    include: {
      model: Song,
      include: [Album, Artist],
    },
  });

  return res.json(playlists);
}));

router.post('/new-song', asyncHandler(async (req, res) => {
  await song_playlist_join.create(req.body);

  const playlists = await Playlist.findAll({
    include: [Song, User],
  });

  return res.json(playlists);
}));

router.delete('/:playlistId/:songId', asyncHandler(async (req, res) => {
  const playlistId = +req.params.playlistId;
  const songId = +req.params.songId;
  const playlist = await song_playlist_join.findOne({
    where: {
      playlistId,
      songId,
    },
  });
  await playlist.destroy();

  const playlists = await Playlist.findAll({
    include: [Song, User],
  });
  return res.json(playlists);
}));

router.post('/', asyncHandler(async (req, res) => {
  const newPlaylist = await Playlist.create(req.body);

  return res.json(newPlaylist);
}));

router.put('/:id', asyncHandler(async (req, res) => {
  const playlist = await Playlist.findByPk(+req.params.id);
  const updatedPlaylist = await playlist.update(req.body);
  return res.json(updatedPlaylist);
}));

router.delete('/:id', asyncHandler(async (req, res) => {
  const joinsEntries = await song_playlist_join.findAll({
    where: {
      playlistId: req.params.id,
    },
  });

  joinsEntries.forEach(async (entry) => {
    await entry.destroy();
  });

  const playlist = await Playlist.findByPk(req.params.id);
  await playlist.destroy();
  return res.json({ message: 'Playlist Destroyed' });
}));

module.exports = router;

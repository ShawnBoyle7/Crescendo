const express = require('express');
const asyncHandler = require('express-async-handler');
const { Playlist, Song, User, Song_Playlist_Join } = require('../../db/models');
const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
  const playlists = await Playlist.findAll({
    include: Song
  });

  return res.json(playlists)
}));

router.post('/new-song', asyncHandler(async (req, res) => {
  await Song_Playlist_Join.create(req.body)

  const playlists = await Playlist.findAll({
    include: [Song, User]
  });
  
  return res.json(playlists);
}));

// 3.
router.post('/', asyncHandler(async (req, res) => {
  const newPlaylist = await Playlist.create(req.body);

  return res.json(newPlaylist);
}));

router.put('/:id', asyncHandler(async (req, res) => {
  const playlist = await Playlist.findByPk(+req.params.id)
  const updatedPlaylist = await playlist.update(req.body)
  return res.json(updatedPlaylist)
}));

router.delete('/:id', asyncHandler(async (req, res) => {
  const playlist = await Playlist.findByPk(req.params.id);
  playlist.destroy()
  return res.json({ message: "Playlist Destroyed" })
}));

module.exports = router;